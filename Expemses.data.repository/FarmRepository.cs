using System.Collections.Generic;
using System.Text;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Expenses.data.entityframework;
using Expenses.common.interfaces.Repository;
using Expenses.core.DataLayer.Shared;
using Microsoft.EntityFrameworkCore;
using Expenses.common.interfaces.Identity;

namespace Expenses.entityframework.repository
{
    public class FarmRepository : Repository, IFarmRepository
    {
        public FarmRepository(IUserInfo userInfo, ExpenseDbContext dbContext)
            : base(userInfo, dbContext)
        {

        }
        public async Task<Farm> GetFarmAsync(int farmId)
        {
            return await DbContext
                .Set<Farm>().AsNoTracking()
                .FirstOrDefaultAsync(item => item.FarmId == farmId);
        }

        public async Task<IEnumerable<Farm>> GetFarmsAsync(int pageSize, int pageNumber)
        {
            IEnumerable<Farm> IEnumerableList = null;
            if (pageNumber == 0)
            {
                IEnumerableList = await DbContext.Set<Farm>().ToListAsync();
            }
            else
            {
                var query = DbContext.Set<Farm>().AsQueryable();
                IEnumerableList = query.Paging<Farm>(pageSize, pageNumber).AsEnumerable();
            }
            return IEnumerableList;
        }
    }



}
