using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Ancan_Context_Service.Migrations
{
    /// <inheritdoc />
    public partial class correctionDatabase : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "PhoneNomber",
                table: "Clients",
                newName: "PhoneNumber");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "PhoneNumber",
                table: "Clients",
                newName: "PhoneNomber");
        }
    }
}
