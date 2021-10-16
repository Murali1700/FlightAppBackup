using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookingMicroService.Model
{
    public class Passenger
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Gender { get; set; }
        public int Age { get; set; }
        public int BookingId { get; set; }
        public Booking Booking { get; set; }
    }
}
