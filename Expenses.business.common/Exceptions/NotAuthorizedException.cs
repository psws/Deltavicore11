using System;
using System.Collections.Generic;
using System.Text;

namespace Expenses.common.code.Exceptions
{
    public class NotAuthorizedException : DbException
    {
        public NotAuthorizedException()
        {
        }

        public NotAuthorizedException(String message)
            : base(message)
        {
        }
    }
}
