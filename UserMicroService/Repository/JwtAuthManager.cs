using UserMicroService.Model;
using UserMicroService.Repository;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Security.Claims;
using Microsoft.Extensions.Configuration;

namespace UserMicroService.Services
{
    public class JwtAuthManager : IJwtAuthManager
    {
        private UserDbContext _userDbContext;
        private IConfiguration _configuration;
        private string _key;
        public JwtAuthManager(UserDbContext userDbContext, IConfiguration configuration)
        {
            _userDbContext = userDbContext;
            _configuration = configuration;
        }

        public User Authentication(User user1)
        {
            _key = _configuration.GetValue<string>("Key");
            User user = _userDbContext.Users.FirstOrDefault(x => x.Email.ToLower() == user1.Email.ToLower() && x.Password == user1.Password);
            if (user == null)
            {
                return new User();
            }
            var tokenHandler = new JwtSecurityTokenHandler();
            var tokenKey = Encoding.ASCII.GetBytes(_key);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, user.Name)
                }),
                Expires = DateTime.UtcNow.AddHours(1),
                SigningCredentials = new SigningCredentials(
                    new SymmetricSecurityKey(tokenKey),
                    SecurityAlgorithms.HmacSha256Signature)

            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            user.Token = tokenHandler.WriteToken(token);
            return user;
        }

    }
}
