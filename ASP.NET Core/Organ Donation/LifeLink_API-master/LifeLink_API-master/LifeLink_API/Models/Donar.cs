using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LifeLink_API.Models
{
    public class Donar
    {
        public int DonarId { get; set; }
        public string DonarName { get; set; }
        public string DonarEmail { get; set; }
        public string DonarNo { get; set; }
        public String DonarDateOfBirth { get; set; }
        public string DonarGender { get; set; }
        public string DonarAdhaar { get; set; }
        public string DonarAddress { get; set; }
        public int HospitalId { get; set; }
        public string DonarPassword { get; set; }
        public DateTime UpdateDate { get; set; }
    }
}
