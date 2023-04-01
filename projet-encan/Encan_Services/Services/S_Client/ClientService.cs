using Microsoft.EntityFrameworkCore;
using Ancan_Context_Service.Models;
using Ancan_Context_Service.Services.AncanDb;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Runtime.CompilerServices;

namespace Encan_Services.Services.S_Client
{
    public class ClientService : IClientService
    {
        private readonly AncanDbContext _context;
        public ClientService(AncanDbContext context) 
        { 
            _context = context;
        }

        public async Task AddClientAsync(Client client)
        {
            await _context.Clients.AddAsync(client);
            await _context.SaveChangesAsync();
        }
        public async Task<List<Client>> GetClientsAsync()
        {
            return await _context.Clients.ToListAsync();
        }

        public async Task<Client> GetClientAsync(int id)
        {
            var client = await _context.Clients.FindAsync(id);

            if (client == null) throw new ArgumentException("Client not found.");
            return client;
        }


        public async Task UpdateClientAsync(Client client)
        {
            var clientTemp = await _context.Clients.FindAsync(client.Id);

            if (clientTemp == null) throw new ArgumentException($"{nameof(client)} no exists.");

            _context.Clients.Update(client);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteClientAsync(int id)
        {
            var client = await _context.Clients.FindAsync(id);

            if (client == null) throw new ArgumentException("Client not found.", nameof(id));

            _context.Clients.Remove(client);
            await _context.SaveChangesAsync();
        }
    }
}
