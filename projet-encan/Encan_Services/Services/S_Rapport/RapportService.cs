using Ancan_Context_Service.Models;
using Ancan_Context_Service.Models.rapport;
using Ancan_Context_Service.Services.AncanDb;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Encan_Services.Services.S_Rapport
{
    public class RapportService : IRapportService
    {
        private readonly AncanDbContext _context;
        public RapportService(AncanDbContext context)
        {
            _context = context;
        }

        public async Task<List<Rapport>> GetRapports()
        {

            return await _context.Biddings
                .Include(b => b.Item)
                .ThenInclude(i => i.Biddings)
                .Include(b => b.Client)
                .Select(b => new Rapport 
                { 
                    bidprice = b.BiddingPrice,
                    name = b.Item.Name,
                    vendorname = b.Item.VendorName,
                    vendoremail = b.Item.VendorEmail,
                    vendorphone = b.Item.VendorPhone,
                    firstName = b.Client.FirstName,
                    lastname = b.Client.LastName,
                    email = b.Client.Email,
                    phonenumber = b.Client.PhoneNumber
                }).ToListAsync();
        }
    }
}
