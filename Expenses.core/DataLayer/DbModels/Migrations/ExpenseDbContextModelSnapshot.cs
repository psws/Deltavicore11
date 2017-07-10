using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Expenses.core.DataLayer;

namespace Expenses.core.DataLayer.DbModels.Migrations
{
    [DbContext(typeof(ExpenseDbContext))]
    partial class ExpenseDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.2")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Expenses.core.DataLayer.DBModels.Provider", b =>
                {
                    b.Property<int>("ProviderId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("CityAddress")
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("ContactName")
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("CountryAddress")
                        .HasColumnType("nvarchar(50)");

                    b.Property<DateTime?>("CreationDateTime")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime?>("LastUpdateDateTime")
                        .ValueGeneratedOnAddOrUpdate();

                    b.Property<string>("LastUpdateUser")
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("MilePostAddress")
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("ProviderNamee")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("RouteAddress")
                        .HasColumnType("nvarchar(150)");

                    b.Property<byte[]>("RowVersion")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate();

                    b.Property<string>("StreetAddress")
                        .HasColumnType("nvarchar(200)");

                    b.HasKey("ProviderId");

                    b.ToTable("Provider","Purchases");
                });
        }
    }
}
