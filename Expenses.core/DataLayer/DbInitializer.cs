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
                    new Provider{ProviderNamee="ALF SAHEL",CountryAddress = "Morocco", CityAddress="Casablanca",PostalCode="20100",
                            RouteAddress ="Route D El Jadida",MilePostAddress = "Km 28", Email = "alfsahel@alfsahel.com",
                            PhoneCountryCode = "212" , PhoneLocal =  "(0)5229-64705",
                            Facebook = "https://www.facebook.com/pages/alf-sahel/172709959593562",
                            CreationDateTime=DateTime.Parse("2005-09-01")},
                    new Provider{ProviderNamee="DISTICA",CountryAddress = "Morocco", CityAddress="Kenitra", CreationDateTime=DateTime.Parse("2005-09-01")},
                    new Provider{ProviderNamee="ALF AL  ATLAS",CountryAddress = "Morocco", CityAddress="Casablanca", PostalCode = "20000",
                            StreetAddress ="105, Bd. d’Anfa", Email = "info@zalar.ma", Website= "http://zalar.ma/en/animal-feed-production/",
                            PhoneCountryCode = "212" , PhoneLocal =  "(0)5 22 33 15 42",
                            CreationDateTime =DateTime.Parse("2005-09-01")},
                     new Provider{ProviderNamee="EDDIK",CountryAddress = "Morocco", CityAddress="Berrechid", PostalCode = "26100",
                            MilePostAddress = "Km 4,5", RouteAddress= "Main Road 7", StreetAddress ="118", Email = "contact@eddik.ma",
                            PhoneCountryCode = "212" , PhoneLocal =  "(0)522-336797",
                            CreationDateTime =DateTime.Parse("2005-09-01")},
                     new Provider{ProviderNamee="INAAM",CountryAddress = "Morocco", CreationDateTime=DateTime.Parse("2005-09-01")},
                     new Provider{ProviderNamee="SOPROMAL",CountryAddress = "Morocco", CityAddress="Témara ", PostalCode = "12050",
                            StreetAddress ="Zone Industrielle Temara1,", 
                            PhoneCountryCode = "212" , PhoneLocal =  "(0)527-740696",
                            CreationDateTime =DateTime.Parse("2005-09-01")},

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