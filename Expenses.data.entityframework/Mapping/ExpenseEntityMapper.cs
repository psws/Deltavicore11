using System.Composition.Hosting;
using System.Reflection;
using Expenses.core.DataLayer.DbModels;
using Expenses.common.interfaces.Data;


namespace Expenses.data.entityframework.Mapping
{
    public class ExpenseEntityMapper : EntityMapper
    {
        public ExpenseEntityMapper()
        {
            //get all assemblies that have an IAuditEntity interface
            //This will target the Expenses.core assembly
            //This assembly contains the POCO entities that need tp be added to the Model
            var assemblies = new[] { typeof(IAuditEntity).GetTypeInfo().Assembly };

            var configuration = new ContainerConfiguration().WithAssembly(typeof(IAuditEntity).GetTypeInfo().Assembly);

            using (var container = configuration.CreateContainer())
            {
                Mappings = container.GetExports<IEntity>();
            }
        }
    }
}
