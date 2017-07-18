using System;
using Expenses.common.interfaces.Identity;
namespace Expenses.identity
{
    public class UserInfo : IUserInfo
    {
        public UserInfo()
        {
        }

        public String Domain { get; set; }

        public String Name { get; set; }

        public String[] Roles { get; set; }
    }
}
