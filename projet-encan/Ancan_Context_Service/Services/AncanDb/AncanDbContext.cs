using Microsoft.EntityFrameworkCore;
using Ancan_Context_Service.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ancan_Context_Service.Services.AncanDb
{
    public class AncanDbContext : DbContext
    {
        public AncanDbContext(DbContextOptions<AncanDbContext> options) : base(options)
        {

        }

        public DbSet<Client> Clients { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Bidding> Biddings { get; set; }
        public DbSet<Item> Items { get; set; }
    }
}
