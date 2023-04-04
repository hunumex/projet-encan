using Encan_Services.Services.S_Bidding;
using Encan_Services.Services.S_Item;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace projet_encan.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RapportController : ControllerBase
    {
        readonly IBiddingService _biddingService;
        readonly IItemService _itemService;
        public RapportController(IBiddingService biddingService, IItemService itemService)
        {
            _biddingService = biddingService;
            _itemService = itemService;
        }
    }
}
