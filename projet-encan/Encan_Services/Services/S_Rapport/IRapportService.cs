using Ancan_Context_Service.Models.rapport;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Encan_Services.Services.S_Rapport
{
    public interface IRapportService
    {
        Task<List<Rapport>> GetRapports();

    }
}
