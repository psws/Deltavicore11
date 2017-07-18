using System;
using System.Collections.Generic;
using System.Text;
using Expenses.common.interfaces.Service.Responses;

namespace Expenses.common.code
{
    public class SingleModelResponse<TModel> : ISingleModelResponse<TModel> where TModel : new()
    {
        public SingleModelResponse()
        {
            Model = new TModel();
            DidError = false;
            ErrorMessage = new List<string>();
        }

        public String Message { get; set; }
        public Boolean DidError { get; set; }
        public IList<String> ErrorMessage { get; set; }
        public TModel Model { get; set; }
    }
}
