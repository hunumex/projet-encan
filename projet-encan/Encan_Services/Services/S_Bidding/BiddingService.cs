using Ancan_Context_Service.Models;
using Ancan_Context_Service.Services.AncanDb;
using Encan_Services.Services.S_Client;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Encan_Services.Services.S_Bidding
{
    public class BiddingService : IBiddingService
    {
        private readonly AncanDbContext _context;
        public BiddingService(AncanDbContext context)
        {
            _context = context;
        }

        public async Task AddBidAsync(int bid, Client client, int itenID)
        {
            var item = await _context.Items.FindAsync(itenID);
            if (item == null) throw new Exception("L'item n'existe pas.");

            var clietTem = await _context.Clients.Where(c =>
                c.FirstName == client.FirstName &&
                c.LastName == client.LastName &&
                c.Email == client.Email &&
                c.PhoneNumber == client.PhoneNumber
            ).ToListAsync();

            if (clietTem.Count <= 0)
            {
                await _context.Clients.AddAsync(client);
                await _context.SaveChangesAsync();
            }


            var b = new Bidding
            {
                BiddingPrice = bid,
                ClientId = clietTem.Count <= 0 ? client.Id: clietTem[0].Id,
                ItemID = itenID,
            };

            await _context.AddAsync(b);
            await _context.SaveChangesAsync();
        }        
        public async Task AddBidAsync(Bidding bid)
        {
            if (bid.BiddingPrice > 0 && bid.ClientId > 0 && bid.ItemID > 0)
            {
                await _context.AddAsync(bid);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<List<Bidding>> GetBidsAsync()
        {
            return await _context.Biddings.ToListAsync();
        }

        public async Task<Bidding> GetBidAsync(int id)
        {
            if(id < 0) throw new ArgumentNullException("id");
            var bid = await _context.Biddings.FindAsync(id);
            if (bid == null) throw new Exception("Bidding not found.");

            return bid;
        }
        public async Task<List<Bidding>> GetBidByItemIdAsync(int itemID)
        {
            if(itemID < 0) throw new ArgumentNullException(nameof(itemID));

            var bidding = await _context.Biddings.Where(b => b.ItemID == itemID).ToListAsync();

            if (bidding.Count == 0) throw new Exception("Cet item n'a pas encore était enchéri.");

            return bidding;
        }

        public async Task UpdateBidAsync(Bidding bid)
        {
            if (bid == null) throw new Exception("Bidding null");
            var bidTemp = await _context.Biddings.FindAsync(bid.Id);
            if (bidTemp == null) throw new Exception("Bidding No Exist");

            _context.Entry(bid).State = EntityState.Detached;
            _context.Biddings.Update(bidTemp);
            await _context.SaveChangesAsync();
        }
        public async Task DeleteBidAsync(int id)
        {
            var bid = await _context.Biddings.FindAsync(id);
            if (bid == null) throw new Exception("Bidding No Exist");

            _context.Biddings.Remove(bid);
            await _context.SaveChangesAsync();
        }
    }
}
