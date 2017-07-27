using System;
using System.Collections.Generic;
using System.Text;

namespace Expenses.common.code.Exceptions
{
    public class NotImplementedException : DbException
    {
        public NotImplementedException()
        {
        }

        public NotImplementedException(String message)
            : base(message)
        {
        }
    }
}
