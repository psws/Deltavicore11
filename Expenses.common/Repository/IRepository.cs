using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;


namespace Expenses.common.interfaces.Repository
{
    // made public to expose Repository Dispose()
    public interface IRepository : IDisposable
    {
        int CommitChanges();

        Task<int> CommitChangesAsync();
    }
}
