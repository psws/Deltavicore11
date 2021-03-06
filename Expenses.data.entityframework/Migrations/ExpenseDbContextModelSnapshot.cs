﻿using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Expenses.data.entityframework;

namespace Expenses.data.entityframework.Migrations
{
    [DbContext(typeof(ExpenseDbContext))]
    partial class ExpenseDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.2")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Expenses.core.DataLayer.PoultryFeed.Provider", b =>
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

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Facebook")
                        .HasColumnType("nvarchar(200)");

                    b.Property<bool>("IsActive")
                        .HasColumnType("bit");

                    b.Property<DateTime?>("LastUpdateDateTime")
                        .ValueGeneratedOnAddOrUpdate();

                    b.Property<string>("LastUpdateUser")
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("MilePostAddress")
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("PhoneCountryCode")
                        .HasColumnType("nvarchar(15)");

                    b.Property<string>("PhoneExtension")
                        .HasColumnType("nvarchar(15)");

                    b.Property<string>("PhoneLocal")
                        .HasColumnType("nvarchar(29)");

                    b.Property<string>("PostalCode")
                        .HasColumnType("nvarchar(25)");

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

                    b.Property<string>("Website")
                        .HasColumnType("nvarchar(200)");

                    b.HasKey("ProviderId");

                    b.ToTable("Provider","PoultryFeed");
                });

            modelBuilder.Entity("Expenses.core.DataLayer.Shared.Farm", b =>
                {
                    b.Property<int>("FarmId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("CityAddress")
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("ContactName")
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("CountryAddress")
                        .HasColumnType("nvarchar(50)");

                    b.Property<DateTime?>("CreationDateTime")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Facebook")
                        .HasColumnType("nvarchar(200)");

                    b.Property<string>("FarmName")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<bool>("IsActive")
                        .HasColumnType("bit");

                    b.Property<DateTime?>("LastUpdateDateTime")
                        .ValueGeneratedOnAddOrUpdate();

                    b.Property<string>("LastUpdateUser")
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("MilePostAddress")
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("PhoneCountryCode")
                        .HasColumnType("nvarchar(15)");

                    b.Property<string>("PhoneExtension")
                        .HasColumnType("nvarchar(15)");

                    b.Property<string>("PhoneLocal")
                        .HasColumnType("nvarchar(29)");

                    b.Property<string>("PostalCode")
                        .HasColumnType("nvarchar(25)");

                    b.Property<string>("RouteAddress")
                        .HasColumnType("nvarchar(150)");

                    b.Property<byte[]>("RowVersion")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate();

                    b.Property<string>("StreetAddress")
                        .HasColumnType("nvarchar(200)");

                    b.Property<string>("Website")
                        .HasColumnType("nvarchar(200)");

                    b.HasKey("FarmId");

                    b.ToTable("Farm","Shared");
                });
        }
    }
}
