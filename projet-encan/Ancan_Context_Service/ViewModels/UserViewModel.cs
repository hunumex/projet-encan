using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ancan_Context_Service.ViewModels
{
    public class UserViewModel
    {
        public int Id { get; set; }
        public string? UserName { get; set; }
        public string? Token { get; set; }
        public bool IsAdmin { get; set; }
    }
}
