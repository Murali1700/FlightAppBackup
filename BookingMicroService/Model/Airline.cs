using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookingMicroService.Model
{
    public class Airline
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Logo { get; set; }
        public int ContactNumber { get; set; }
        public string Address { get; set; }
        public List<Flight> Flights { get; set; }

    }
}
