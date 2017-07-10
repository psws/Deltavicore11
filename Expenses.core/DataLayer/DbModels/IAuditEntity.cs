using System;
using System.Collections.Generic;
using System.Text;

namespace Expenses.core.DataLayer.DbModels
{
    public interface IAuditEntity
    {
        String LastUpdateUser { get; set; }

        DateTime? CreationDateTime { get; set; }

        DateTime? LastUpdateDateTime { get; set; }

        Byte[] RowVersion { get; set; }
    }
}
