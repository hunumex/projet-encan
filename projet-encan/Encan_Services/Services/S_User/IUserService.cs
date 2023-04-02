using Ancan_Context_Service.Models;
using Ancan_Context_Service.Models.DTOs;
using Ancan_Context_Service.ViewModels;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Encan_Services.Services.S_User
{
    public interface IUserService
    {
        Task<UserViewModel> Login([FromBody] LoginDto user);
    }
}
