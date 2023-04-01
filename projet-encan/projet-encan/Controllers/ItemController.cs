﻿using Ancan_Context_Service.Models;
using Encan_Services.Services.S_Item;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace projet_encan.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemController : ControllerBase
    {
        readonly IItemService _itemService;

        public ItemController(IItemService itemService)
        {
            _itemService = itemService;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllAsync()
        {
            var item = await _itemService.GetItemsAsync();

            return Ok(item);
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Item>> GetAsync(int id)
        {
            var item = await _itemService.GetItemAsync(id);
            return Ok(item);
        }

        [HttpPost]
        public async Task<ActionResult<Item>> PostItemAsync(Item item)
        {
            if (item == null) return BadRequest();

            await _itemService.AddItemAsync(item);

            return Created(nameof(GetAsync), new { id = item.Id });
        }

        [HttpPut]
        public async Task<ActionResult<Item>> PutItemAsync(Item item)
        {
            if (item == null) return BadRequest();

            await _itemService.UpdateItemAsync(item);

            return Ok();
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<Item>> DeleteItemAsync(int id)
        {
            if (GetAsync(id) == null) return NotFound();
            await _itemService.DeleteItemAsync(id);
            return NoContent();
        }
    }
}
