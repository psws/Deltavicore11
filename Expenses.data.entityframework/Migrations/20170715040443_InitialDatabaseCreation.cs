using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Expenses.data.entityframework.Migrations
{
    public partial class InitialDatabaseCreation : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.EnsureSchema(
                name: "PoultryFeed");

            migrationBuilder.EnsureSchema(
                name: "Shared");

            migrationBuilder.CreateTable(
                name: "Provider",
                schema: "PoultryFeed",
                columns: table => new
                {
                    ProviderId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CityAddress = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    ContactName = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    CountryAddress = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    CreationDateTime = table.Column<DateTime>(nullable: true),
                    Email = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    Facebook = table.Column<string>(type: "nvarchar(200)", nullable: true),
                    IsActive = table.Column<bool>(type: "bit", nullable: false),
                    LastUpdateDateTime = table.Column<DateTime>(nullable: true),
                    LastUpdateUser = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    MilePostAddress = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    PhoneCountryCode = table.Column<string>(type: "nvarchar(15)", nullable: true),
                    PhoneExtension = table.Column<string>(type: "nvarchar(15)", nullable: true),
                    PhoneLocal = table.Column<string>(type: "nvarchar(29)", nullable: true),
                    PostalCode = table.Column<string>(type: "nvarchar(25)", nullable: true),
                    ProviderNamee = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    RouteAddress = table.Column<string>(type: "nvarchar(150)", nullable: true),
                    RowVersion = table.Column<byte[]>(rowVersion: true, nullable: true),
                    StreetAddress = table.Column<string>(type: "nvarchar(200)", nullable: true),
                    Website = table.Column<string>(type: "nvarchar(200)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Provider", x => x.ProviderId);
                });

            migrationBuilder.CreateTable(
                name: "Farm",
                schema: "Shared",
                columns: table => new
                {
                    FarmId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CityAddress = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    ContactName = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    CountryAddress = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    CreationDateTime = table.Column<DateTime>(nullable: true),
                    Email = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    Facebook = table.Column<string>(type: "nvarchar(200)", nullable: true),
                    FarmName = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    IsActive = table.Column<bool>(type: "bit", nullable: false),
                    LastUpdateDateTime = table.Column<DateTime>(nullable: true),
                    LastUpdateUser = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    MilePostAddress = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    PhoneCountryCode = table.Column<string>(type: "nvarchar(15)", nullable: true),
                    PhoneExtension = table.Column<string>(type: "nvarchar(15)", nullable: true),
                    PhoneLocal = table.Column<string>(type: "nvarchar(29)", nullable: true),
                    PostalCode = table.Column<string>(type: "nvarchar(25)", nullable: true),
                    RouteAddress = table.Column<string>(type: "nvarchar(150)", nullable: true),
                    RowVersion = table.Column<byte[]>(rowVersion: true, nullable: true),
                    StreetAddress = table.Column<string>(type: "nvarchar(200)", nullable: true),
                    Website = table.Column<string>(type: "nvarchar(200)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Farm", x => x.FarmId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Provider",
                schema: "PoultryFeed");

            migrationBuilder.DropTable(
                name: "Farm",
                schema: "Shared");
        }
    }
}
