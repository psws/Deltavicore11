using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Expenses.core.DataLayer.Shared;

namespace Expenses.data.entityframework.Seeds
{
    public static class SeedFarm
    {
        public static async Task Initialize(ExpenseDbContext context, ILogger logger)
        {
            logger?.LogInformation("{0} has been invoked", nameof(SeedFarm));
            var Farms = new Farm[]
                {
                    new Farm  {FarmName="O.Mehdi",
                            CreationDateTime=DateTime.Parse("2013-09-01")},
                    new Farm  {FarmName="FM O.Mehdi",
                            CreationDateTime=DateTime.Parse("2013-09-01")},
                    new Farm  {FarmName="F. Cherkaoui",
                            CreationDateTime=DateTime.Parse("2013-09-01")},
                    new Farm  {FarmName="S. Poultry",
                            CreationDateTime=DateTime.Parse("2013-09-01")},
                    new Farm  {FarmName="O. Assal",
                            CreationDateTime=DateTime.Parse("2013-09-01")},
                    new Farm  {FarmName="Confort Avicole",
                            CreationDateTime=DateTime.Parse("2013-09-01")},
                    new Farm  {FarmName="Ntaalah",
                            CreationDateTime=DateTime.Parse("2013-09-01")},
                    new Farm  {FarmName="Sara",
                            CreationDateTime=DateTime.Parse("2013-09-01")},
                    new Farm  {FarmName="Fellous Mnasra",
                            CreationDateTime=DateTime.Parse("2013-09-01")},
                    new Farm  {FarmName="Deltavi",
                            CreationDateTime=DateTime.Parse("2013-09-01")},
                    new Farm  {FarmName="MKAM",
                            CreationDateTime=DateTime.Parse("2013-09-01")},
                    new Farm  {FarmName="SBIH",
                            CreationDateTime=DateTime.Parse("2013-09-01")}
             };

            foreach (Farm s in Farms)
            {
                context.Set<Farm>().Add(s);
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
