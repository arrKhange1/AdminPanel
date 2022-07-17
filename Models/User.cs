using System;
using System.ComponentModel.DataAnnotations;

namespace Gamification.Models
{
    public class User
    {
        [Key]
        public Guid Id { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }


        public Guid RoleId { get; set; }
        public Role Role { get; set; }

    }
}
