using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Expenses.common.interfaces.Service;
using Deltavicore11.webapi.ExceptionSupport;

namespace Deltavicore11.webapi
{
    [Route("api/Farm")]

    public class FarmController : Controller
    {
        protected ILogger Logger;
        protected IFarmService FarmService;

        public FarmController(ILogger<FarmController> logger, IFarmService farmService)
        {
            Logger = logger;
            FarmService = farmService;
        }


        [HttpGet]
        [Route("GetFarm/{farmid:int}")]
        public async Task<IActionResult> GetFarm(int farmId)
        {
            // http://localhost:52371/api/PoultryFeed/GetProvider/1
            Logger?.LogInformation("{0} has been invoked", nameof(GetFarm));

            var response = await FarmService.GetFarmAsync(farmId);


            return response.ToHttpResponse();
        }

        [HttpGet]
        [Route("GetFarms/{pageSize?}/{pageNumber?}")] // ? implies optional parm no parm will get all
        public async Task<IActionResult> GetFarms(int? pageSize = 10, int? pageNumber = 0)
        {
            //pageNumber 0 => all
            //  http://localhost:52371/api/Farm/GetFarms/3/1
            Logger?.LogInformation("{0} has been invoked", nameof(GetFarms));

            var response = await FarmService.GetFarmsAsync((int)pageSize, (int)pageNumber);

            return response.ToHttpResponse();
        }






        protected override void Dispose(Boolean disposing)
        {
            FarmService?.Dispose();

            base.Dispose(disposing);
        }

    }
}

