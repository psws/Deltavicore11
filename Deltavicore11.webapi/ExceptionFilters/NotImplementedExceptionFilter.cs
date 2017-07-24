using System;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Logging;


namespace Deltavicore11.webapi.ExceptionFilters
{
    public class NotImplementedExceptionFilter : ExceptionFilterAttribute
    {
        private readonly ILogger _logger;
        //https://damienbod.com/2015/09/30/asp-net-5-exception-filters-and-resource-filters/

        public NotImplementedExceptionFilter(ILoggerFactory loggerFactory)
        {
            _logger = loggerFactory.CreateLogger("NotImplementedExceptionFilter");
        }

        public override void OnException(ExceptionContext context)
        {
            _logger.LogInformation("OnException");
            base.OnException(context);
        }

        //public override Task OnExceptionAsync(ExceptionContext context)
        //{
        //    _logger.LogInformation("OnActionExecuting async");
        //    return base.OnExceptionAsync(context);
        //}
    }

}
