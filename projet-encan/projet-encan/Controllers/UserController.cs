using Ancan_Context_Service.Models;
using Ancan_Context_Service.Models.DTOs;
using Encan_Services.Services.S_User;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace projet_encan.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost]
        public async Task<IActionResult> Login([FromBody] LoginDto user)
        {
            try
            {
                return Ok(await _userService.Login(user));
            }
            catch (Exception e)
            {

                return Unauthorized(e.Message);
            }
            
        }
    }
}
