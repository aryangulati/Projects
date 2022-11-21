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
    public class HospitalController : Controller
    {
        private readonly IConfiguration _configuration;

        public HospitalController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [Route("GetAllHospitalList")]
        [HttpGet]
        public JsonResult GetAllHospitalList()
        {
            string query = @"
                    select HospitalId,HospitalName from HospitalList";
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

        [Route("HospitalRegistration")]
        [HttpPost]
        public JsonResult HospitalRegistration(Hospital hospital)
        {
            string query = @"
                    insert into HospitalList(HospitalName,HospitalEmail,HospitalNo,HospitalRegisterNo,HospitalAddress,HospitalPassword) values 
                    ('" + hospital.HospitalName + @"','" + hospital.HospitalEmail + @"','" + hospital.HospitalNo + @"','" + hospital.HospitalRegisterNo + @"','" + hospital.HospitalAddress + @"','" + hospital.HospitalPassword + @"')
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
        [Route("GetAllDonarsList")]
        [HttpPost]
        public JsonResult GetAllDonarsList(Hospital hospital)
        {
            string query = @"
                    select * from DonarsList where HospitalId = " + hospital.HospitalId + @" ";
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
        [Route("GetAllSeekersList")]
        [HttpPost]
        public JsonResult GetAllSeekersList(Hospital hospital)
        {
            string query = @"
                    select * from SeekerList where HospitalId = " + hospital.HospitalId + @" ";
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


        [Route("HospitalLogin")]
        [HttpPost]
        public JsonResult HospitalLogin(Hospital hospital)
        {
            string query = @"select HospitalId from HospitalList where HospitalEmail = '" + hospital.HospitalEmail + @"' and HospitalPassword =  '" + hospital.HospitalPassword + @"' ";
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

    }
}
