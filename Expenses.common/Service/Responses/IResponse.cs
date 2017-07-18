using System;
using System.Collections.Generic;
using System.Text;

namespace Expenses.common.interfaces.Service.Responses
{
    public interface IResponse
    {
        String Message { get; set; }

        bool DidError { get; set; }

        IList<String> ErrorMessage { get; set; }
    }
}
