using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LifeLink_API.Models
{
    public class Seeker
    {
        public int SeekerId { get; set; }
        public string SeekerName { get; set; }
        public string SeekerEmail { get; set; }
        public string SeekerNo { get; set; }
        public string SeekerDateOfBirth { get; set; }
        public string SeekerGender { get; set; }
        public string SeekerAdhaar { get; set; }
        public string SeekerAddress { get; set; }
        public int HospitalId { get; set; }
        public string SeekerPassword { get; set; }
        public DateTime UpdateDate { get; set; }
    }
}
