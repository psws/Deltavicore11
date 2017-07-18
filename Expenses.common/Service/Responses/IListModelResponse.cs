using System;
using System.Collections.Generic;
using System.Text;

namespace Expenses.common.interfaces.Service.Responses
{
    public interface IListModelResponse<TModel> : IResponse
    {
        IEnumerable<TModel> Model { get; set; }
    }
}
