using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Expenses.data.entityframework;
using Expenses.common.interfaces.Repository;
using Expenses.core.DataLayer.PoultryFeed;
using Microsoft.EntityFrameworkCore;
using Expenses.common.interfaces.Identity;
using Expenses.common.code;
using Expenses.common.interfaces.Service.Responses;

namespace Expenses.entityframework.repository
{
    public class PoultryFeedRepository : Repository, IPoultryFeedRepository
    {
        public PoultryFeedRepository(IUserInfo userInfo, ExpenseDbContext dbContext)
            : base(userInfo, dbContext)
        {

        }

        public async Task<Provider> GetProviderAsync(int providerId)
        {
            return  await DbContext
                .Set<Provider>().AsNoTracking()
                .FirstOrDefaultAsync(item => item.ProviderId == providerId);
        }

        public async Task<IEnumerable<Provider>> GetProvidersAsync(int pageSize , int pageNumber )
        {
            IEnumerable<Provider> IEnumerableList = null;
            if (pageNumber == 0)
            {
                IEnumerableList = await DbContext.Set<Provider>().ToListAsync();
            }
            else
            {
                var query = DbContext.Set<Provider>().AsQueryable();
                IEnumerableList =  query.Paging<Provider>(pageSize, pageNumber).AsEnumerable();
            }
            return IEnumerableList;
        }

    }
}
