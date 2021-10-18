using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AirlineMicroService.Model
{
    public class Schedule
    {
        public int Id { get; set; }
        public int FlightId { get; set; }
        public string Source { get; set; }
        public string Destination { get; set; }
        public TimeSpan TakeOffTime { get; set; }
        public TimeSpan LandingTime { get; set; }
        public string ScheduleDays { get; set; }
        public Flight Flight { get; set; }
    }
}
