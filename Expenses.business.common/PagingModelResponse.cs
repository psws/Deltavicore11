using System;
using System.Collections.Generic;
using System.Text;
using Expenses.common.interfaces.Service.Responses;

namespace Expenses.common.code
{
    public class PagingModelResponse<TModel> : IPagingModelResponse<TModel>
    {
        public String Message { get; set; }
        public Boolean DidError { get; set; }
        public IList<String> ErrorMessage { get; set; }
        public IEnumerable<TModel> Model { get; set; }
        public Int32 PageSize { get; set; }
        public Int32 PageNumber { get; set; }
        public Int32 ItemCount { get; set; }
        public Int32 PageCount =>
            ItemCount == 0 ? 0 : ItemCount / PageSize;
    }
}
