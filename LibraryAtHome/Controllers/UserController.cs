﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using LibraryAtHome.Models;
using LibraryAtHome.Data;


namespace LibraryAtHome.Controllers
{
    [Route("api/user")]
    [ApiController]
    public class UserController : ControllerBase
    {
        // create a repo field to instantiate the User Repository
        readonly UserRepository _repo;

        // constructor 
        public UserController()
        {
            _repo = new UserRepository();
        }

        // HTTP GET METHODS

        [HttpGet]
        public IActionResult GetAllUsers()
        {
            var allUsers = _repo.GetUsers();

            return Ok(allUsers);
        }

        // HTTP POST METHODS
        public IActionResult CreateUser(User user)
        {
            var userId = _repo.CreateNewUser(user.FirstName, user.LastName, user.Email);

            return Ok(userId);
        }

    }
}
