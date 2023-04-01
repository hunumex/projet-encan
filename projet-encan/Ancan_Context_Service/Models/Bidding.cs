using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ancan_Context_Service.Models
{
    public class Bidding
    {
        public int Id { get; set; }
        public int BiddingPrice { get; set; }
        public int ClientId { get; set; }
        public int ItemID { get; set; }
        public Client? Client { get; set; }
        public Item? Item { get; set; }
    }
}
