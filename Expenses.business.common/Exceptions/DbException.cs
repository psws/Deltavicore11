using System;
using System.Collections.Generic;
using System.Text;


namespace Expenses.common.code.Exceptions
{
    public class DbException : System.Exception
    {
        //https://blog.gurock.com/articles/creating-custom-exceptions-in-dotnet/
        // no serialization on .netcore
        //https://github.com/dotnet/corefx/blob/2b15de70c1cf9f585c4878a722de4dbe42b4940b/Documentation/project-docs/porting.md#binary-serialization

        public DbException() : base() { }
        public DbException(string message) : base(message) { }
        public DbException(string message, Exception inner) : base(message, inner) { }
    }
}