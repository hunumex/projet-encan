using Ancan_Context_Service.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Encan_Services.Services.S_Client
{
    public interface IClientService
    {
        Task<List<Client>> GetClientsAsync();
        Task<Client> GetClientAsync(int id);
        Task AddClientAsync(Client client);
        Task UpdateClientAsync(Client client);
        Task DeleteClientAsync(int id);
    }
}
