using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public class OrganDonate
    {
        public int  PersonId { get; set; }

        public string PersonName { get; set; }

        public string Hospitals { get; set; }

        public string DateOfReceipt { get; set; }

        public string PhotoFileName { get; set; }
    }
}
