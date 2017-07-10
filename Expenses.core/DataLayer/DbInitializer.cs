using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Expenses.core.DataLayer.DBModels;
using Microsoft.Extensions.Options;
using Expenses.core.DataLayer.Mapping;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;


namespace Expenses.core.DataLayer
{
    public static class DbInitializer
    {

        public static async Task  Initialize(ExpenseDbContext context, ILogger logger)
        {
            using (context)
            {
                //https://forums.asp.net/t/2122687.aspx?How+to+Seed+Data+in+Core+

                context.Database.EnsureCreated();//if db is not exist ,it will create database .but ,do nothing .

                logger?.LogInformation("{0} has been invoked", nameof(DbInitializer));
                // Look for any students.
                if (context.Set<Provider>().Any())
                {
                    return;   // DB has been seeded
                }
                var Providers = new Provider[]
                     {
                    new Provider{ProviderNamee="ALF SAHEL",CityAddress="Casablanca",CreationDateTime=DateTime.Parse("2005-09-01")}
                     };
                foreach (Provider s in Providers)
                {
                    context.Set<Provider>().Add(s);
                }
                await context.SaveChangesAsync();



                // var courses = new Course[]
                // {
                // new Course{CourseID=1050,Title="Chemistry",Credits=3,},
                // ..... 
                //context.SaveChanges();
            }

        }
    }
    }