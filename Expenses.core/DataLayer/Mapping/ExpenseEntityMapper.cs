using System.Composition.Hosting;
using System.Reflection;
using Expenses.core.DataLayer.DbModels;

namespace Expenses.core.DataLayer.Mapping
{
    public class ExpenseEntityMapper : EntityMapper
    {
        public ExpenseEntityMapper()
        {
            var assemblies = new[] { typeof(ExpenseDbContext).GetTypeInfo().Assembly };

            var configuration = new ContainerConfiguration().WithAssembly(typeof(ExpenseDbContext).GetTypeInfo().Assembly);

            using (var container = configuration.CreateContainer())
            {
                Mappings = container.GetExports<IEntity>();
            }
        }
    }
}
