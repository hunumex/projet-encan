using Ancan_Context_Service.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Encan_Services.Services.S_Bidding
{
    public interface IBiddingService
    {
        Task AddBidAsync(Bidding bid);
        Task AddBidAsync(int bid, Client client, int itenID);
        Task<List<Bidding>> GetBidsAsync();
        Task<Bidding> GetBidAsync(int id);
        Task UpdateBidAsync(Bidding bid);
        Task DeleteBidAsync(int id);
    }
}
