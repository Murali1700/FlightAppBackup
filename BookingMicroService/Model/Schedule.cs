using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookingMicroService.Model
{
    public class Schedule
    {
        public int Id { get; set; }
        public int FlightId { get; set; }
        public string Source { get; set; }
        public string Destination { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public int Duration { get; set; }
        public string ScheduleDays { get; set; }
        public Flight Flight { get; set; }
    }
}
