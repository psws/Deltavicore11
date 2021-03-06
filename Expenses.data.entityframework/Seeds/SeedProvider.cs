﻿using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Expenses.core.DataLayer.PoultryFeed;


namespace Expenses.data.entityframework.Seeds
{
    public static class SeedProvider
    {

        public static async Task Initialize(ExpenseDbContext context, ILogger logger)
        {
            logger?.LogInformation("{0} has been invoked", nameof(SeedProvider));
            var Providers = new Provider[]
                {
                    new Provider{ProviderName="ALF SAHEL",CountryAddress = "Morocco", CityAddress="Casablanca",PostalCode="20100",
                            RouteAddress ="Route D El Jadida",MilePostAddress = "Km 28", Email = "alfsahel@alfsahel.com",
                            PhoneCountryCode = "212" , PhoneLocal =  "(0)5229-64705",
                            Facebook = @"https://www.facebook.com/pages/alf-sahel/172709959593562",
                            CreationDateTime=DateTime.Parse("2013-09-01")},

                    new Provider{ProviderName="DISTICA",CountryAddress = "Morocco", CityAddress="Kenitra", CreationDateTime=DateTime.Parse("2013-09-01")},
                    new Provider{ProviderName="ALF AL  ATLAS",CountryAddress = "Morocco", CityAddress="Casablanca", PostalCode = "20000",
                            StreetAddress = "105, Bd. d’Anfa" , Email = "info@zalar.ma", Website= @"http://zalar.ma/en/animal-feed-production/",
                            PhoneCountryCode = "212" , PhoneLocal =  "(0)5 22 33 15 42",
                            CreationDateTime =DateTime.Parse("2013-09-01")},
                     new Provider{ProviderName="EDDIK",CountryAddress = "Morocco", CityAddress="Berrechid", PostalCode = "26100",
                            MilePostAddress = "Km 4,5", RouteAddress= "Main Road 7", StreetAddress ="118", Email = "contact@eddik.ma",
                            PhoneCountryCode = "212" , PhoneLocal =  "(0)522-336797",
                            CreationDateTime =DateTime.Parse("2013-09-01")},
                     new Provider{ProviderName="INAAM",CountryAddress = "Morocco", CreationDateTime=DateTime.Parse("2013-09-01")},
                     new Provider{ProviderName="SOPROMAL",CountryAddress = "Morocco", CityAddress="Témara ", PostalCode = "12050",
                            StreetAddress ="Zone Industrielle Temara1,",
                            PhoneCountryCode = "212" , PhoneLocal =  "(0)527-740696",
                            CreationDateTime =DateTime.Parse("2013-09-01")}

             };

            foreach (Provider s in Providers)
            {
                context.Set<Provider>().Add(s);
            }
            try
            {
                await context.SaveChangesAsync();
            }
            catch (Exception ex)
            {

                throw;
            }

        }
    }
}
