using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookingMicroService.Model
{
    public class Flight
    {
        public int Id { get; set; }
        public int AirlineId { get; set; }
        public int FlightNumber { get; set; }
        public Airline Airline { get; set; }
        public Schedule Schedule { get; set; }
    }
}
