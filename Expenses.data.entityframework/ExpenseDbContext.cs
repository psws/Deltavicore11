﻿using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Expenses.data.entityframework.Mapping;
using Microsoft.Extensions.Logging;

namespace Expenses.data.entityframework
{
    public class ExpenseDbContext : Microsoft.EntityFrameworkCore.DbContext
    {
        public String ConnectionString { get; }
        public IEntityMapper EntityMapper { get; }
        public ILogger<ExpenseDbContext> Logger { get; }

    public ExpenseDbContext(IOptions<AppSettings> appSettings, IEntityMapper entityMapper, ILogger<ExpenseDbContext> logger)
        {
            ConnectionString = appSettings.Value.ConnectionString;
            EntityMapper = entityMapper;
            Logger = logger;
            Logger?.LogInformation("{0} has been invoked", nameof(ExpenseDbContext));
            Logger?.LogInformation("{0} ConnectionString", ConnectionString);
        }

        //public DbSet<Provider> Provider { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
#if SQLLITE_DEBUG
            optionsBuilder.UseSqlite(ConnectionString);
#else
            optionsBuilder.UseSqlServer(ConnectionString);
#endif
            optionsBuilder.UseQueryTrackingBehavior(QueryTrackingBehavior.TrackAll );
            base.OnConfiguring(optionsBuilder);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            EntityMapper.MapEntities(modelBuilder);

            //this adds the type if not in the model
            //modelBuilder.Entity<Provider>();

            base.OnModelCreating(modelBuilder);
            Logger?.LogInformation("{0} has been invoked", nameof(OnModelCreating));

        }

    }
}
