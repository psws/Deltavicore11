using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Expenses.core.DataLayer.PoultryFeed;
using Expenses.core.DataLayer.Shared;

using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Expenses.data.entityframework.Seeds;

namespace Expenses.data.entityframework
{
    public static class DbInitializer
    {

        public static async Task  Initialize(ExpenseDbContext context, ILogger logger)
        {
            using (context)
            {
                logger?.LogInformation("{0} has been invoked", nameof(DbInitializer));
                try
                {
                    context.Database.EnsureCreated();//if db is not exist ,it will create database .but ,do nothing .
                }
                catch (Exception ex)
                {
                    logger?.LogCritical("{0}:error {1} ", nameof(DbInitializer),ex.Message);
                    throw;
                }    

                logger?.LogInformation("{0} has been invoked", nameof(DbInitializer));
                // Look for any students.
                if (!context.Set<Provider>().Any())
                {
                    await SeedProvider.Initialize(context, logger);
                }
                if (!context.Set<Farm>().Any())
                {
                    await SeedFarm.Initialize(context, logger);
                }
            }

        }
    }
    }