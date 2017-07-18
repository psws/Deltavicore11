using System;
using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Expenses.common.interfaces.Service.Responses;
using Expenses.common.code.Exceptions;

namespace Expenses.common.code
{
    public static class ModelResponseExtensions
    {
        public static void SetError<TModel>(this IListModelResponse<TModel> response, Exception ex, ILogger logger)
        {
            response.DidError = true;

            var cast = ex as DbException;

            if (cast == null)
            {
                response.ErrorMessage.Add("There was an internal error, please contact to technical support.");

                logger?.LogCritical(ex.ToString());
            }
            else
            {
               // response.ErrorMessage = null ??   new List<string>();
                response.ErrorMessage.Add(ex.Message);
                logger?.LogError(ex.Message);
                var Inner = ex.InnerException;
                while (Inner != null)
                {
                    response.ErrorMessage.Add(Inner.Message);
                    logger?.LogError(Inner.Message);
                    Inner = Inner.InnerException;
                }

            }
        }

        public static void SetError<TModel>(this ISingleModelResponse<TModel> response, Exception ex, ILogger logger)
        {
            response.DidError = true;

            var cast = ex as DbException;

            if (cast == null)
            {
                response.ErrorMessage.Add("There was an internal error, please contact to technical support.");
                logger?.LogCritical(ex.ToString());
            }
            else
            {
                response.ErrorMessage.Add(ex.Message);
                logger?.LogError(ex.Message);
                var Inner = ex.InnerException;
                while (Inner != null)
                {
                    response.ErrorMessage.Add(Inner.Message);
                    logger?.LogError(Inner.Message);
                    Inner = Inner.InnerException;
                }

            }
        }
    }
}
