using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AirlineMicroService.Model
{
    public class Flight
    {
        public int Id { get; set; }
        public int AirlineId { get; set; }
        public int FlightNumber { get; set; }
        public int TotalSeats { get; set; }
        public int EconomySeats { get; set; }
        public int BusinessSeats { get; set; }
        public int EconomyPrice { get; set; }
        public int BusinessPrice { get; set; }
        public Airline Airline { get; set; }
        public Schedule Schedule { get; set; }
    }
}
