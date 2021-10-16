using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserMicroService.Model;
using UserMicroService.Services;

namespace UserMicroService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private IJwtAuthManager _jwtAuthManager;
        public UserController(IJwtAuthManager jwtAuthManager)
        {
            _jwtAuthManager = jwtAuthManager;
        }

        [AllowAnonymous]
        [HttpPost]
        public IActionResult Login(User user)
        {
            var token = _jwtAuthManager.Authentication(user);
            if (token == null)
                return Unauthorized();
            return Ok(token);
        }
    }
}
