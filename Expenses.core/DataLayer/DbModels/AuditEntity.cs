using System;
using System.Composition;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Expenses.core.DataLayer.DbModels
{
    public abstract class AuditEntity : IAuditEntity
    {
        [Column(TypeName = "nvarchar(100)")]
        //[MaxLength(100)]
        public String LastUpdateUser { get; set; }

        [DataType(DataType.DateTime)]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        //http://www.learnentityframeworkcore.com/configuration/data-annotation-attributes/databasegenerated-attribute
        public DateTime? CreationDateTime { get; set; } = DateTime.UtcNow;

        [DataType(DataType.DateTime)]
        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        //https://andy.mehalick.com/2014/02/06/ef6-adding-a-created-datetime-column-automatically-with-code-first-migrations/
        public DateTime? LastUpdateDateTime { get; set; }

        //public Guid Timestamp { get; set; }
        //http://www.entityframeworktutorial.net/code-first/TimeStamp-dataannotations-attribute-in-code-first.aspx
        [Timestamp]
        //http://www.entityframeworktutorial.net/code-first/concurrencycheck-dataannotations-attribute-in-code-first.aspx
        [ConcurrencyCheck]
        public Byte[] RowVersion { get; set; }
    }
}
