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
    public class DonarController : Controller
    {
        private readonly IConfiguration _configuration;

        public DonarController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                    select DonarId, DonarName,DonarEmail,DonarNo,DonarDateOfBirth,DonarGender,DonarAdhaar,DonarAddress,HospitalId,DonarPassword,UpdateDate from DonarsList";
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
        [Route("DonarRegistration")]
        [HttpPost]
        public JsonResult DonarRegistration(Donar donar)
        {
            string query = @"
                    insert into DonarsList(DonarName,DonarEmail,DonarNo,DonarDateOfBirth,DonarGender,DonarAdhaar,DonarAddress,HospitalId,DonarPassword) values 
                    ('" + donar.DonarName + @"','" + donar.DonarEmail + @"','" + donar.DonarNo + @"', '"+ donar.DonarDateOfBirth +@"','" + donar.DonarGender + @"','" + donar.DonarAdhaar + @"','" + donar.DonarAddress + @"','" + donar.HospitalId + @"','" + donar.DonarPassword + @"')
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

        [Route("DonarLogin")]
        [HttpPost]
        public JsonResult DonarLogin(Donar donar)
        {
            string query = @"select DonarId from DonarsList where DonarEmail = '" + donar.DonarEmail + @"' and DonarPassword =  '" + donar.DonarPassword + @"' ";
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

        [Route("GetDonarData")]
        [HttpPost]
        public JsonResult GetDonarData(Donar donar)
        {
            string query = @"
                    select * from DonarsList where DonarId = " + donar.DonarId + @" ";
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
        [Route("DeleteDonar")]
        [HttpPost]
        public JsonResult DeleteDonar(Donar donar)
        {
            string query = @"
                    delete from DonarsList where DonarId = " + donar.DonarId + @" ";
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
