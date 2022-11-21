using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LifeLink_API.Models;
using System.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System.Data;

namespace LifeLink_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SeekerController : Controller
    {
        private readonly IConfiguration _configuration;

        public SeekerController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                    select * from SeekerList";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DonarsAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }
        [HttpPost]
        public JsonResult Post(Seeker seeker)
        {
            string query = @"
                    insert into SeekerList(SeekerName,SeekerEmail,SeekerNo,SeekerDateOfBirth,SeekerGender,SeekerAdhaar,SeekerAddress,HospitalId) values 
                    ('" + seeker.SeekerName + @"','" + seeker.SeekerEmail + @"','" + seeker.SeekerNo + @"', '" + seeker.SeekerDateOfBirth + @"','" + seeker.SeekerGender + @"','" + seeker.SeekerAdhaar + @"','" + seeker.SeekerAddress + @"','" + seeker.HospitalId + @"')
                    ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DonarsAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Added Successfully");
        }
        [Route("DeleteSeeker")]
        [HttpPost]
        public JsonResult DeleteSeeker(Seeker seeker)
        {
            string query = @"
                    delete from SeekerList where SeekerId = " + seeker.SeekerId + @" ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DonarsAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Delete Successfully");
        }
    }
}
