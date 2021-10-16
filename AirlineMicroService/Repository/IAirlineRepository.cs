using AirlineMicroService.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AirlineMicroService.Repository
{
    public interface IAirlineRepository
    {
        public Airline RegisterAirline(Airline airline);
        public Airline ModifyAirline(Airline airline);
        public Flight AddFlightToAirline(Flight flight);
        public List<Schedule> AddFightSchedule(Schedule schedule);
        public Schedule ModifyFlightSchedule(Schedule schedule);
        public List<Airline> GetAllAirlines();
        public Airline GetAirlineById(int id);
        public Schedule GetScheduleByFlight(int flightId);
        public List<Flight> GetAllFlights();
        public Flight GetFlightById(int id);
        public Flight ModifyFlight(Flight flight);
    }
}
