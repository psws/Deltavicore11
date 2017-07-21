using System;
using System.Collections.Generic;
using System.Text;
using System.Composition;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Expenses.core.DataLayer.DbModels;

namespace Expenses.core.DataLayer.Shared
{
    [Export(typeof(IEntity))]
#if SQLLITE_DEBUG
    [Table("Shared.ChangeLog")]
#else
    [Table("ChangeLog", Schema = "Shared")]
#endif

    public class ChangeLog : AuditEntity, IEntity
    {
        [Key]
        public int ChangeLogID { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(1000)")]
        public String ClassName { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public String PropertyName { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public String Key { get; set; }

        public String OriginalValue { get; set; }
        public String CurrentValue { get; set; }
    }
}
