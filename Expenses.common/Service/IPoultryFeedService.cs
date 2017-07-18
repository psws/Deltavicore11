using System;
using System.Threading.Tasks;
using Expenses.common.interfaces.Service.Responses;
using Expenses.core.DataLayer.PoultryFeed;

namespace Expenses.common.interfaces.Service
{
    public interface IPoultryFeedService : IBusinessObject
    {
        Task<ISingleModelResponse<Provider>> GetVendorAsync(int vendorId);
        Task<IListModelResponse<Provider>> GetVendorsAsync(int pageSize, int pageNumber);
    }
}

