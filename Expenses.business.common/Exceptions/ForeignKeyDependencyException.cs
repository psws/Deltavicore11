using System;
using System.Collections.Generic;
using System.Text;

namespace Expenses.common.code.Exceptions
{
    public class ForeignKeyDependencyException : DbException
    {
        public ForeignKeyDependencyException()
        {
        }

        public ForeignKeyDependencyException(String message)
            : base(message)
        {
        }
    }
}
