using System;
using System.Collections.Generic;
using System.Text;
using Expenses.common.interfaces.Service.Responses;

namespace Expenses.common.code
{
    public class ListModelResponse<TModel> : IListModelResponse<TModel>where TModel : new()
    {
        public String Message { get; set; }
        public Boolean DidError { get; set; }
        public IList<String> ErrorMessage { get; set; }
        public IEnumerable<TModel> Model { get; set; }

        public ListModelResponse()
        {
            DidError = false;
            ErrorMessage = new List<string>();
        }


    }
}
