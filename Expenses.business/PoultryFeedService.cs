﻿using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Expenses.common.code;
using Expenses.common.interfaces.Service.Responses;
using Expenses.common.interfaces.Service;
using Expenses.core.DataLayer.PoultryFeed;
using Expenses.common.interfaces.Identity;
using Expenses.common.interfaces.Repository;

namespace Expenses.business
{
    public class PoultryFeedService : BusinessObject, IPoultryFeedService
    {
        public IPoultryFeedRepository PoultryFeedRepository { get; }

        public PoultryFeedService(ILogger<PoultryFeedService> logger, IUserInfo userInfo, IPoultryFeedRepository poultryFeedRepository)
            : base(logger, userInfo)
        {
            PoultryFeedRepository = poultryFeedRepository;
        }

        public async Task<ISingleModelResponse<Provider>> GetVendorAsync(int vendorId)
        {
            {
                Logger?.LogInformation("{0} has been invoked", nameof(GetVendorAsync));

                var response = new SingleModelResponse<Provider>();

                try
                {
                    response.Model = await PoultryFeedRepository.GetVendorAsync(vendorId);
                }
                catch (Exception ex)
                {
                    response.SetError(ex, Logger);
                }

                return response;
            }
        }

        public async Task<IListModelResponse<Provider>> GetVendorsAsync(int pageSize, int pageNumber)
        {
            {
                Logger?.LogInformation("{0} has been invoked", nameof(GetVendorAsync));

                var response = new ListModelResponse<Provider>();

                try
                {
                    response.Model = await PoultryFeedRepository.GetVendorsAsync(pageSize, pageNumber);
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
                if (PoultryFeedRepository != null)
                {
                    PoultryFeedRepository.Dispose();

                    Disposed = true;
                }
            }
        }

    }
}
