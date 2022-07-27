using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using System.Data;
using TeslaCarsAndOwners.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TeslaCarsAndOwners.Controllers
{
    [Route("api/[controller]")]
    public class CarsController : Controller
    {
        private readonly IConfiguration? _configuration;

        public CarsController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        // GET: api/values
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"select Carid, Models from dbo.Cars";
            DataTable table = new();
            string sqlDataSource = _configuration.GetConnectionString("TeslaCarsAppCon");
            SqlDataReader myReader;
            using(SqlConnection myCon = new(sqlDataSource))
            {
                myCon.Open();
                using SqlCommand myCommand = new(query, myCon);
                myReader = myCommand.ExecuteReader();
                table.Load(myReader);

                myReader.Close();
                myCon.Close();
            }
            return new JsonResult(table);
        }

        // INSERT DATA
        [HttpPost]
        public JsonResult Post([FromBody]Cars cars)
        {
            string query = @"insert into dbo.Cars values
                            ('"+cars.Models+@"')
                            ";
            DataTable table = new();
            string sqlDataSource = _configuration.GetConnectionString("TeslaCarsAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new(sqlDataSource))
            {
                myCon.Open();
                using SqlCommand myCommand = new(query, myCon);
                myReader = myCommand.ExecuteReader();
                table.Load(myReader);

                myReader.Close();
                myCon.Close();
            }
            return new JsonResult("Added Successfully");
        }

        // UPDATE DATA
        [HttpPut]
        public JsonResult Put([FromBody]Cars cars)
        {
            string query = @"update dbo.Cars set Models =
                            '"+cars.Models+@"'
                            where Carid = "+cars.Carid+@"
                            ";
            DataTable table = new();
            string sqlDataSource = _configuration.GetConnectionString("TeslaCarsAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new(sqlDataSource))
            {
                myCon.Open();
                using SqlCommand myCommand = new(query, myCon);
                myReader = myCommand.ExecuteReader();
                table.Load(myReader);

                myReader.Close();
                myCon.Close();
            }
            return new JsonResult("Updated Successfully");
        }

        // DELETE DATA
        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"delete from dbo.Cars
                            where Carid = " + id + @"
                            ";
            DataTable table = new();
            string sqlDataSource = _configuration.GetConnectionString("TeslaCarsAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new(sqlDataSource))
            {
                myCon.Open();
                using SqlCommand myCommand = new(query, myCon);
                myReader = myCommand.ExecuteReader();
                table.Load(myReader);

                myReader.Close();
                myCon.Close();
            }
            return new JsonResult("Deleted Successfully");
        }
    }
}

