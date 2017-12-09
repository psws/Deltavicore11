using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Expenses.common.code;
using Expenses.common.interfaces.Service.Responses;
using Expenses.common.interfaces.Service;
using Expenses.core.DataLayer.Shared;
using Expenses.common.interfaces.Identity;
using Expenses.common.interfaces.Repository;

namespace Expenses.business
{
    public class FarmService : BusinessObject, IFarmService
    {
        public IFarmRepository FarmRepository { get; }

        public FarmService(ILogger<FarmService> logger, IUserInfo userInfo, IFarmRepository farmRepository)
            : base(logger, userInfo)
        {
            FarmRepository = farmRepository;
        }

        public async Task<ISingleModelResponse<Farm>> GetFarmAsync(int vendorId)
        {
            {
                Logger?.LogInformation("{0} has been invoked", nameof(GetFarmAsync));

                var response = new SingleModelResponse<Farm>();

                try
                {
                    response.Model = await FarmRepository.GetFarmAsync(vendorId);
                }
                catch (Exception ex)
                {
                    response.SetError(ex, Logger);
                }

                return response;
            }
        }

        public async Task<IListModelResponse<Farm>> GetFarmsAsync(int pageSize, int pageNumber)
        {
            {
                Logger?.LogInformation("{0} has been invoked", nameof(GetFarmsAsync));

                var response = new ListModelResponse<Farm>();

                try
                {
                    response.Model = await FarmRepository.GetFarmsAsync(pageSize, pageNumber);
                }
                catch (Exception ex)
                {
                    response.SetError(ex, Logger);
                }

                return response;
            }
        }

        public void Dispose()
        {
            if (!Disposed)
            {
                if (FarmRepository != null)
                {
                    FarmRepository.Dispose();

                    Disposed = true;
                }
            }
        }

    }
}

