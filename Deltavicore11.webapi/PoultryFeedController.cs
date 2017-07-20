using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Expenses.common.interfaces.Service;
using Expenses.business;

namespace Deltavicore11.webapi
{
    [Route("api/PoultryFeed")]

    public class PoultryFeedController : Controller
    {
        protected ILogger Logger;
        protected IPoultryFeedService PoultryFeedService;

        public PoultryFeedController(ILogger<PoultryFeedController> logger, IPoultryFeedService poultryFeedService)
        {
            Logger = logger;
            PoultryFeedService = poultryFeedService;
        }


        [HttpGet]
        [Route("GetProvider/{providerId:int}")]
        public async Task<IActionResult> GetProvider(int providerId)
        {
           // http://localhost:52371/api/PoultryFeed/GetProvider/1
            Logger?.LogInformation("{0} has been invoked", nameof(GetProvider));

            var response = await PoultryFeedService.GetProviderAsync(providerId);

            return response.ToHttpResponse();
        }

        [HttpGet]
        [Route("GetProviders/{pageSize}/{pageNumber}")]
        public async Task<IActionResult> GetProviders(int? pageSize = 10, int? pageNumber = 1)
        {
            //http://localhost:52371/api/PoultryFeed/GetProviders/3/1
            Logger?.LogInformation("{0} has been invoked", nameof(GetProviders));

            var response = await PoultryFeedService.GetProvidersAsync((int)pageSize, (int)pageNumber);

            return response.ToHttpResponse();
        }




        protected override void Dispose(Boolean disposing)
        {
            PoultryFeedService?.Dispose();

            base.Dispose(disposing);
        }

    }
}
