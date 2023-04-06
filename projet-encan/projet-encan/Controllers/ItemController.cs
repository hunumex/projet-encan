using Ancan_Context_Service.Models;
using Ancan_Context_Service.Models.DTOs;
using Encan_Services.Services.S_Item;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace projet_encan.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
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
        public async Task<ActionResult<Item>> PostItemAsync([FromForm]ItemDTO item)
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
        [HttpPut("putImage")]
        public async Task<ActionResult<Item>> PutItemAsync([FromForm] ItemDTO item)
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
