using Ancan_Context_Service.Models;
using Ancan_Context_Service.Models.DTOs;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Encan_Services.Services.S_Item
{
    public interface IItemService
    {
        Task<List<Item>> GetItemsAsync();
        Task<Item> GetItemAsync(int id);
        Task AddItemAsync([FromForm]ItemDTO item);
        Task UpdateItemAsync(Item item);
        Task DeleteItemAsync(int id);
    }
}
