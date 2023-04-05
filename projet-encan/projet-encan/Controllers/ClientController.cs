using Ancan_Context_Service.Models;
using Encan_Services.Services.S_Client;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace projet_encan.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class ClientController : ControllerBase
    {

        readonly IClientService _clientService;
        public ClientController(IClientService clientService)
        {
            _clientService = clientService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllAsync()
        {
            var client = await _clientService.GetClientsAsync();

            return Ok(client);
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Client>> GetAsync(int id)
        {
            var client = await _clientService.GetClientAsync(id);

            return Ok(client);
        }

        [HttpPost]
        public async Task<ActionResult<Client>> PostClientAsync(Client client)
        {
            if (client == null) return BadRequest();

            await _clientService.AddClientAsync(client);

            return new ContentResult
            {
                ContentType = "text/plain",
                StatusCode = 201,
                Content = "Le client est bien enregistré."
            };
        }

        [HttpPut]
        public async Task<ActionResult<Client>> PutClientAsync(Client client)
        {
            if(client == null) return BadRequest();

            await _clientService.UpdateClientAsync(client);

            return new ContentResult
            {
                ContentType = "text/plain",
                StatusCode = 200,
                Content = "Le client a bien été modifiée."
            };
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<Client>> DeleteClientAsync(int id)
        {
            if (GetAsync(id) == null) return NotFound();
            await _clientService.DeleteClientAsync(id);

            return new ContentResult
            {
                ContentType = "text/plain",
                StatusCode = 200,
                Content = "Le client a bien été supprimée."
            };
        }
    }
}
