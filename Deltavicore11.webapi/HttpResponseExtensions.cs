﻿using System;
using System.Net;
using Microsoft.AspNetCore.Mvc;
using Expenses.common.interfaces.Service.Responses;

namespace Deltavicore11.webapi
{
    public static class HttpResponseExtensions
    {
        public static IActionResult ToHttpResponse<TModel>(this IListModelResponse<TModel> response)
        {
            var status = HttpStatusCode.OK;

            if (response.DidError)
            {
                status = HttpStatusCode.InternalServerError;
            }
            else if (response.Model == null)
            {
                status = HttpStatusCode.NoContent;
            }

            return new ObjectResult(response)
            {
                StatusCode = (Int32)status
            };
        }

        public static IActionResult ToHttpResponse<TModel>(this ISingleModelResponse<TModel> response)
        {
            var status = HttpStatusCode.OK;

            if (response.DidError)
            {
                status = HttpStatusCode.InternalServerError;
            }
            else if (response.Model == null)
            {
                status = HttpStatusCode.NotFound;
            }

            return new ObjectResult(response)
            {
                StatusCode = (Int32)status
            };
        }
    }
}

