using UserMicroService.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UserMicroService.Services
{
    public interface IJwtAuthManager
    {
        public User Authentication(User user);
    }
}
