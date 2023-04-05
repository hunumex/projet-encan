using Encan_Services.Services.S_Bidding;
using Encan_Services.Services.S_Rapport;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace projet_encan.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class RapportController : ControllerBase
    {
        readonly IRapportService _rapportService;
        public RapportController(IRapportService rapportService)
        {
            _rapportService = rapportService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllAsync()
        {
            return Ok(await _rapportService.GetRapports());
        }
    }
}
