using Ancan_Context_Service.Models;
using Ancan_Context_Service.Models.DTOs;
using Ancan_Context_Service.Services.AncanDb;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
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
        public async Task AddItemAsync([FromForm]ItemDTO item)
        {
            Item itemDB = new Item() { 
                Name= item.Name,
                Available= item.Available,
                Condition=item.Condition,
                Price=item.Price,
                Description= item.Description,
                VendorEmail= item.VendorEmail,
                VendorName= item.VendorName,
                VendorPhone= item.VendorPhone,

            };
            await SaveImage(item.ImagePath, itemDB);
            await _context.Items.AddAsync(itemDB);
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
        public async Task UpdateItemAsync([FromForm] ItemDTO item)
        {
            var itemTemp = await _context.Items.FindAsync(item.Id);

            if (itemTemp == null) throw new ArgumentException($"{nameof(item)} no exists.");

            _context.Entry(itemTemp).State = EntityState.Detached;


            itemTemp.Name = item.Name;
                itemTemp.Available = item.Available;
                itemTemp.Condition = item.Condition;
                itemTemp.Price = item.Price;
                itemTemp.Description = item.Description;
                itemTemp.VendorEmail = item.VendorEmail;
                itemTemp.VendorName = item.VendorName;
                itemTemp.VendorPhone = item.VendorPhone;

            
            await SaveImage(item.ImagePath, itemTemp);
            _context.Items.Update(itemTemp);
            await _context.SaveChangesAsync();
        }
        private async Task<bool> SaveImage(IFormFile file, Item item)
        {
            var pathBuilt = Path.Combine("Wwwroot\\images");
            if (!Directory.Exists(pathBuilt))
            {
                Directory.CreateDirectory(pathBuilt);
            }
            var extension = "." + file.FileName.Split('.')[file.FileName.Split('.').Length - 1];
            if (extension != ".png" && extension != ".jpeg" && extension != ".jpg")
            {
                throw  new Exception("Probleme rencontr'e durant l'upload") ;
            }
            string fileName = Guid.NewGuid().ToString() + "_" + file.FileName;
            pathBuilt = Path.Combine("wwwroot\\images", fileName);
            using (var steam = new FileStream(pathBuilt, FileMode.Create))
            {
                await file.CopyToAsync(steam);
            }
            item.ImagePath = Path.Combine("images", fileName); ;
            return true;
        }
    }
}
