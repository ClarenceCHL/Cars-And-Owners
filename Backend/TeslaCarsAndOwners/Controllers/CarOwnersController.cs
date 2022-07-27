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
    public class CarOwnersController : Controller
    {
        private readonly IConfiguration? _configuration;
        private readonly IWebHostEnvironment _env;

        public CarOwnersController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }

        // GET: api/values
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"select Ownerid, OwnerName, OwnerAge, Models,
                            convert(varchar(10), DateOfPurchase, 120) as DateOfPurchase,
                            PhotoFileName from dbo.CarOwners";
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
            return new JsonResult(table);
        }

        // INSERT DATA
        [HttpPost]
        public JsonResult Post([FromBody] CarOwners carowners)
        {
            string query = @"insert into dbo.CarOwners
                            (OwnerName,OwnerAge,Models,DateOfPurchase,PhotoFileName)
                            values
                            (
                            N'" + carowners.OwnerName + @"'
                            ,'" + carowners.OwnerAge + @"'
                            ,'" + carowners.Models + @"'
                            ,'" + carowners.DateOfPurchase + @"'
                            ,'" + carowners.PhotoFileName + @"'
                            )
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
        public JsonResult Put([FromBody] CarOwners carowners)
        {
            string query = @"update dbo.CarOwners set
                            OwnerName = N'" + carowners.OwnerName + @"'
                            ,OwnerAge = '" + carowners.OwnerAge + @"'
                            ,Models = '" + carowners.Models + @"'
                            ,DateOfPurchase = '" + carowners.DateOfPurchase + @"'
                            ,PhotoFileName = '" + carowners.PhotoFileName + @"'
                            where Ownerid = " + carowners.Ownerid + @"
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
            string query = @"delete from dbo.CarOwners
                            where Ownerid = " + id + @"
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

        [Route("SaveFile")]
        [HttpPost]
        public JsonResult SaveFile()
        {
            try
            {
                var httpRequest = Request.Form;
                var postedFile = httpRequest.Files[0];
                string filename = postedFile.FileName;
                var physicalPath = _env.ContentRootPath + "/Photos/" + filename;
                using var stream = new FileStream(physicalPath, FileMode.Create);
                postedFile.CopyTo(stream);
                return new JsonResult(filename);
            }
            catch (Exception)
            {
                return new JsonResult("anonymous.png");
            }
        }

        [Route("GetAllModelNames")]
        public JsonResult GetAllModelNames()
        {
            string query = @"select Models from dbo.Cars";
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
            return new JsonResult(table);
        }
    }
}