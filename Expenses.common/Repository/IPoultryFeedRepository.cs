using System;
using System.Threading.Tasks;
using System.Collections.Generic;
using Expenses.core.DataLayer.PoultryFeed;

namespace Expenses.common.interfaces.Repository
{
    public interface IPoultryFeedRepository : IRepository
    {
        Task<Provider> GetVendorAsync(int vendorId);
        Task<IEnumerable<Provider>> GetVendorsAsync(int pageSize, int pageNumber);
    }
}
