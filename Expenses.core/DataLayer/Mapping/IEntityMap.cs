using Microsoft.EntityFrameworkCore;

namespace Expenses.core.DataLayer.Mapping
{
    public interface IEntityMap
    {
        void Map(ModelBuilder modelBuilder);
    }
}
