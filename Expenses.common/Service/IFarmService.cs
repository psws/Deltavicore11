using System;
using System.Threading.Tasks;
using Expenses.common.interfaces.Service.Responses;
using Expenses.core.DataLayer.Shared;

namespace Expenses.common.interfaces.Service
{
    public interface IFarmService : IBusinessObject
    {
        Task<ISingleModelResponse<Farm>> GetFarmAsync(int farmID);
        Task<IListModelResponse<Farm>> GetFarmsAsync(int pageSize, int pageNumber);
    }
}
