using System.Threading.Tasks;
using System.Collections.Generic;
using Expenses.core.DataLayer.Shared;

namespace Expenses.common.interfaces.Repository
{
    public interface IFarmRepository : IRepository
    {
        Task<IEnumerable<Farm>> GetFarmsAsync(int pageSize, int pageNumber);
        Task<Farm> GetFarmAsync(int farmID);
    }
}

