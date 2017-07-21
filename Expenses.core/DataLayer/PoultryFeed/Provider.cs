using System;
using System.Composition;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Expenses.core.DataLayer.DbModels;


namespace Expenses.core.DataLayer.PoultryFeed
{
    [Export(typeof(IEntity))]
    //https://docs.microsoft.com/en-us/ef/core/providers/sqlite/limitations
    //sqllite does not support schema creation
#if SQLLITE_DEBUG
    [Table("PoultryFeed.Provider")]
#else
    [Table("Provider", Schema = "PoultryFeed")]
#endif

    public class Provider : AuditEntity , IEntity
    {
        public Provider()
        {
            //CreationDateTime = DateTime.Now;
            IsActive = true;

        }

        ////this method adds the DBSet to context
        //public void Map(ModelBuilder modelBuilder)
        //{
        //    modelBuilder.Entity<Provider>();
        //}


        [Key]
        public int ProviderId { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(100)")]
        //[MaxLength(100)]
        public string ProviderNamee { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        //[MaxLength(100)]
        public string ContactName { get; set; }

        [Column(TypeName = "nvarchar(15)")]
        public string PhoneCountryCode { get; set; }

        [Column(TypeName = "nvarchar(29)")]
        public string PhoneLocal { get; set; }

        [Column(TypeName = "nvarchar(15)")]
        //[MaxLength(100)]
        public string PhoneExtension { get; set; }

        //[Required]
        [Column(TypeName = "nvarchar(200)")]
        //[MaxLength(200)]
        public string StreetAddress { get; set; }

        //[Required]
        [Column(TypeName = "nvarchar(150)")]
        //[MaxLength(150)]
        public string RouteAddress { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        //[MaxLength(50)]
        public string MilePostAddress { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        //[MaxLength(100)]
        public string CityAddress { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        //[MaxLength(50)]
        public string CountryAddress { get; set; }

        [Column(TypeName = "nvarchar(25)")]
        public string PostalCode { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string Email { get; set; }

        [Column(TypeName = "nvarchar(200)")]
        public string Website { get; set; }

        [Column(TypeName = "nvarchar(200)")]
        public string Facebook { get; set; }

        [Column(TypeName = "bit")]
        public bool IsActive { get; set; }

        //[Column(TypeName = "nvarchar(100)")]
        ////[MaxLength(100)]
        //public String LastUpdateUser { get; set; }

        //[DataType(DataType.DateTime)]
        //[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        ////http://www.learnentityframeworkcore.com/configuration/data-annotation-attributes/databasegenerated-attribute
        //public DateTime? CreationDateTime { get; set; } = DateTime.UtcNow;

        //[DataType(DataType.DateTime)]
        //[DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        ////https://andy.mehalick.com/2014/02/06/ef6-adding-a-created-datetime-column-automatically-with-code-first-migrations/
        //public DateTime? LastUpdateDateTime { get; set; }

        ////public Guid Timestamp { get; set; }
        ////http://www.entityframeworktutorial.net/code-first/TimeStamp-dataannotations-attribute-in-code-first.aspx
        //[Timestamp]
        ////http://www.entityframeworktutorial.net/code-first/concurrencycheck-dataannotations-attribute-in-code-first.aspx
        //[ConcurrencyCheck]
        //public Byte[] RowVersion { get; set; }
    }
}
