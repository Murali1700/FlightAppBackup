using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UserMicroService.Model
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public int ContactNumber { get; set; }
        public string Address { get; set; }
        public bool IsAdmin { get; set; }
        public string Token { get; set; }
    }
}
