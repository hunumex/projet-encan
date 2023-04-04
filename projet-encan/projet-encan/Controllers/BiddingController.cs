using Ancan_Context_Service.Models;
using Encan_Services.Services.S_Bidding;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace projet_encan.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BiddingController : ControllerBase
    {
        readonly IBiddingService _biddingService;
        public BiddingController(IBiddingService biddingService)
        {
            _biddingService = biddingService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllAsync()
        {
            var bid = await _biddingService.GetBidsAsync();

            return Ok(bid);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetAsync(int id)
        {
            var bid = await _biddingService.GetBidAsync(id);

            return Ok(bid);
        }
        [HttpGet("item/{id}")]
        public async Task<IActionResult> GetBidByItemIdAsync(int id)
        {
            List<Bidding> bid;
            try
            {
                bid = await _biddingService.GetBidByItemIdAsync(id);
            }catch(Exception ex)
            {
                return NotFound(ex.Message);
            }

            return Ok(bid.LastOrDefault());
        }

        [HttpPost]
        public async Task<ActionResult<Bidding>> PostBidAsync(Bidding bid)
        {
            if (bid == null) return BadRequest();

            await _biddingService.AddBidAsync(bid);
            return new ContentResult
            {
                ContentType = "text/plain",
                StatusCode = 201,
                Content = "L'enchère a bien été faite."
            };
        }        
        [HttpPost("wc")]
        public async Task<ActionResult<Bidding>> PostBidAsync([FromBody] BiddingRequest req)
        {
            if (req == null) return BadRequest();

            var client = new Client
            {
                FirstName = req.FirstName,
                LastName = req.LastName,
                Email = req.Email,
                PhoneNumber = req.PhoneNumber,
            };

            await _biddingService.AddBidAsync(req.BiddingPrice, client, req.ItemID);
            return new JsonResult(new
            {
                StatusCode = 201,
                message = "L'enchère a bien été faite.",
            });
        }

        [HttpPut]
        public async Task<ActionResult<Bidding>> PutBidAsync(Bidding bid)
        {
            if (bid == null) return BadRequest();

            await _biddingService.UpdateBidAsync(bid);

            return new ContentResult
            {
                ContentType = "text/plain",
                StatusCode = 200,
                Content = "L'enchère a bien été modifiée."
            };
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Bidding>> DeleteBidAsync(int id)
        {
            if (GetAsync(id) == null) return NotFound();

            await _biddingService.DeleteBidAsync(id);

            return new ContentResult
            {
                ContentType = "text/plain",
                StatusCode = 200,
                Content = "L'enchère a bien été supprimée."
            };
        }
    }

    public class BiddingRequest
    {
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Email { get; set; }
        public string? PhoneNumber { get; set; }
        public int BiddingPrice { get; set; }
        public int ItemID { get; set;}
    }
}
