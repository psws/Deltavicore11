using System;
using System.Linq;
using Expenses.data.entityframework;
using Expenses.core.DataLayer.DbModels;


namespace Expenses.entityframework.repository
{
    public static class PagingExtensions
    {
        public static IQueryable<TEntity> Paging<TEntity>(this ExpenseDbContext dbContext, Int32 pageSize = 0, Int32 pageNumber = 0) where TEntity : class, IEntity
        {
            var query = dbContext.Set<TEntity>().AsQueryable();

            return pageSize > 0 && pageNumber > 0 ? query.Skip((pageNumber - 1) * pageSize).Take(pageSize) : query;
        }

        public static IQueryable<T> Paging<T>(this IQueryable<T> query, Int32 pageSize = 0, Int32 pageNumber = 0) where T : class
        {
            return pageSize > 0 && pageNumber > 0 ? query.Skip((pageNumber - 1) * pageSize).Take(pageSize) : query;
        }
    }
}
