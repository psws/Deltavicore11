using Microsoft.EntityFrameworkCore;

namespace Expenses.data.entityframework.Mapping
{
    public interface IEntityMap
    {
        void Map(ModelBuilder modelBuilder);
    }
}
