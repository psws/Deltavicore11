using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Expenses.common.interfaces.Identity;
using Expenses.data.entityframework;
using Expenses.core.DataLayer.DbModels;
using Expenses.core.DataLayer.Shared;

namespace Expenses.entityframework.repository
{
    public abstract class Repository
    {
        protected IUserInfo UserInfo;
        protected ExpenseDbContext DbContext;
        protected Boolean Disposed;

        public Repository(IUserInfo userInfo, ExpenseDbContext dbContext)
        {
            UserInfo = userInfo;
            DbContext = dbContext;
        }

        protected virtual void Add<TEntity>(TEntity entity) where TEntity : class, IEntity
        {
            var cast = entity as IAuditEntity;

            if (cast != null)
            {
                cast.LastUpdateUser = UserInfo.Name;

                if (!cast.CreationDateTime.HasValue)
                {
                    cast.CreationDateTime = DateTime.Now;
                }
            }

            DbContext.Set<TEntity>().Add(entity);
        }

        protected virtual void Update<TEntity>(TEntity entity) where TEntity : class, IEntity
        {
            var cast = entity as IAuditEntity;

            if (cast != null)
            {
                cast.LastUpdateUser = UserInfo.Name;

                if (!cast.LastUpdateDateTime.HasValue)
                {
                    cast.LastUpdateDateTime = DateTime.Now;
                }
            }
        }

        protected virtual void Remove<TEntity>(TEntity entity) where TEntity : class, IEntity
        {
            DbContext.Set<TEntity>().Remove(entity);
        }

        protected virtual IEnumerable<ChangeLog> GetChanges()
        {
            foreach (var entry in DbContext.ChangeTracker.Entries())
            {
                if (entry.State == EntityState.Modified)
                {
                    var entityType = entry.Entity.GetType();

                    foreach (var property in entityType.GetTypeInfo().DeclaredProperties)
                    {
                        var originalValue = entry.Property(property.Name).OriginalValue;
                        var currentValue = entry.Property(property.Name).CurrentValue;

                        if (String.Concat(originalValue) != String.Concat(currentValue))
                        {
                            // todo: improve the way to retrieve primary key value from entity instance
                            var key = entry.Entity.GetType().GetProperties()[0].GetValue(entry.Entity, null).ToString();

                            yield return new ChangeLog
                            {
                                ClassName = entityType.Name,
                                PropertyName = property.Name,
                                Key = key,
                                OriginalValue = originalValue == null ? String.Empty : originalValue.ToString(),
                                CurrentValue = currentValue == null ? String.Empty : currentValue.ToString(),
                                LastUpdateUser = UserInfo.Name,
                                 LastUpdateDateTime = DateTime.Now
                            };
                        }
                    }
                }
            }
        }

        public Int32 CommitChanges()
        {
            var dbSet = DbContext.Set<ChangeLog>();

            foreach (var change in GetChanges().ToList())
            {
                dbSet.Add(change);
            }

            return DbContext.SaveChanges();
        }

        public Task<Int32> CommitChangesAsync()
        {
            var dbSet = DbContext.Set<ChangeLog>();

            foreach (var change in GetChanges().ToList())
            {
                dbSet.Add(change);
            }

            return DbContext.SaveChangesAsync();
        }

        public void Dispose()
        {
            if (!Disposed)
            {
                if (DbContext != null)
                {
                    DbContext.Dispose();

                    Disposed = true;
                }
            }
        }

    }
}
