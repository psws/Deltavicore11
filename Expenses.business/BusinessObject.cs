using System;
using Expenses.common.interfaces.Identity;
using Microsoft.Extensions.Logging;


namespace Expenses.business
{
    public class BusinessObject
    {
        protected IUserInfo UserInfo;
        protected Boolean Disposed;
        protected ILogger Logger;

        public BusinessObject(ILogger logger, IUserInfo userInfo)
        {
            Logger = logger;
            UserInfo = userInfo;
        }

    }
}
