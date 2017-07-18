using System;
using System.Collections.Generic;
using System.Text;

namespace Expenses.common.interfaces.Identity
{
    public interface IUserInfo
    {
        String Domain { get; set; }

        String Name { get; set; }

        String[] Roles { get; set; }
    }
}
