using System;
using System.Collections.Generic;
using System.Text;

namespace Expenses.common.interfaces.Service.Responses
{
    public interface IPagingModelResponse<TModel> : IListModelResponse<TModel>
    {
        Int32 ItemCount { get; set; }

        Int32 PageCount { get; }
    }
}
