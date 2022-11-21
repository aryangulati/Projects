using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LifeLink_API.Models
{
    public class Hospital
    {
        public int HospitalId { get; set; }
        public string HospitalName { get; set; }
        public string HospitalEmail { get; set; }
        public string HospitalNo { get; set; }
        public string HospitalRegisterNo { get; set; }
        public string HospitalAddress { get; set; }
        public string HospitalPassword { get; set; }
        public DateTime UpdateDate { get; set; }
    }
}
