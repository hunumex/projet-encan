using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ancan_Context_Service.Models.DTOs
{
    public class ItemDTO
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public IFormFile? ImagePath { get; set; }
        public int Price { get; set; }
        public bool Condition { get; set; }
        public string? Description { get; set; }
        public bool Available { get; set; }
        public string? VendorName { get; set; }
        public string? VendorEmail { get; set; }
        public string? VendorPhone { get; set; }
        public DateTime PostingYear { get; set; }
    }
}
