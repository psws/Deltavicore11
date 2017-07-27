using System;
using System.Collections.Generic;
using System.Text;

namespace Expenses.common.code.Exceptions
{
    public class DuplicatedRowException : DbException
    {
        public DuplicatedRowException()
        {
        }

        public DuplicatedRowException(String message)
            : base(message)
        {
        }
    }
}
