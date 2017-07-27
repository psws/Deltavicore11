using System;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Expenses.common.code.Exceptions;
using Newtonsoft.Json;

namespace Deltavicore11.webapi.ExceptionSupport
{
    //https://stackoverflow.com/questions/38630076/asp-net-core-web-api-exception-handling

    public class ErrorHandlingMiddleware
    {
        private readonly RequestDelegate next;

        public ErrorHandlingMiddleware(RequestDelegate next)
        {
            this.next = next;
        }

        public async Task Invoke(HttpContext context /* other scoped dependencies */)
        {
            try
            {
                await next(context);
            }
            catch (Exception ex)
            {
                await HandleExceptionAsync(context, ex);
            }
        }

        private static Task HandleExceptionAsync(HttpContext context, Exception exception)
        {
            var code = HttpStatusCode.InternalServerError; // 500 if unexpected

            if (exception is Expenses.common.code.Exceptions.NotImplementedException) code = HttpStatusCode.NotImplemented;
            else if (exception is NotAuthorizedException) code = HttpStatusCode.Unauthorized;
            else if (exception is DuplicatedRowException) code = HttpStatusCode.Conflict;

            var result = JsonConvert.SerializeObject(new { error = exception.Message });
            context.Response.ContentType = "application/json";
            context.Response.StatusCode = (int)code;
            return context.Response.WriteAsync(result);
        }
    }
}
