using Ancan_Context_Service.Models;
using Ancan_Context_Service.Services.AncanDb;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Encan_Services.Services.S_Item
{
    public class ItemService : IItemService
    {
        private readonly AncanDbContext _context;
        public ItemService(AncanDbContext context)
        {
            _context = context;
        }
        public async Task AddItemAsync(Item item)
        {
            await _context.Items.AddAsync(item);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteItemAsync(int id)
        {
            var item = await _context.Items.FindAsync(id);

            if (item == null) throw new ArgumentException("Item not found.", nameof(id));

            _context.Items.Remove(item);
            await _context.SaveChangesAsync();
        }

        public async Task<Item> GetItemAsync(int id)
        {
            var item = await _context.Items.FindAsync(id);

            if (item == null) throw new ArgumentException("Item not found.");
            return item;
        }

        public async Task<List<Item>> GetItemsAsync()
        {
            return await _context.Items.ToListAsync();

        }

        public async Task UpdateItemAsync(Item item)
        {
            var itemTemp = await _context.Items.FindAsync(item.Id);

            if (itemTemp == null) throw new ArgumentException($"{nameof(item)} no exists.");

            _context.Entry(itemTemp).State = EntityState.Detached;
            _context.Items.Update(item);
            await _context.SaveChangesAsync();
        }
    }
}
