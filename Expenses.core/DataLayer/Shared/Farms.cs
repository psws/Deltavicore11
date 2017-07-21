using System.Composition;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Expenses.core.DataLayer.DbModels;

namespace Expenses.core.DataLayer.Shared
{
    [Export(typeof(IEntity))]
#if SQLLITE_DEBUG
    [Table("Shared.Farm")]
#else
    [Table("Farm", Schema = "Shared")]
#endif

    public class Farm : AuditEntity, IEntity
    {
        public Farm()
        {
            IsActive = true;
        }


        [Key]
        public int FarmId { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string FarmName { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string ContactName { get; set; }

        [Column(TypeName = "nvarchar(15)")]
        public string PhoneCountryCode { get; set; }

        [Column(TypeName = "nvarchar(29)")]
        public string PhoneLocal { get; set; }

        [Column(TypeName = "nvarchar(15)")]
        public string PhoneExtension { get; set; }

        //[Required]
        [Column(TypeName = "nvarchar(200)")]
        public string StreetAddress { get; set; }

        //[Required]
        [Column(TypeName = "nvarchar(150)")]
        public string RouteAddress { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string MilePostAddress { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string CityAddress { get; set; }

        [Column(TypeName = "nvarchar(50)")]
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
    }
}
