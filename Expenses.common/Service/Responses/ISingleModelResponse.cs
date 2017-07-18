using System;
using System.Collections.Generic;
using System.Text;

namespace Expenses.common.interfaces.Service.Responses
{
    public interface ISingleModelResponse<TModel> : IResponse
    {
        TModel Model { get; set; }
    }
}
