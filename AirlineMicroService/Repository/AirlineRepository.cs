using AirlineMicroService.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AirlineMicroService.Repository
{
    public class AirlineRepository : IAirlineRepository
    {
        private AirlineDbContext _airlineDbContext;
        public AirlineRepository(AirlineDbContext airlineDbContext)
        {
            _airlineDbContext = airlineDbContext;
        }

        public List<Schedule> AddFightSchedule(Schedule schedule)
        {
            _airlineDbContext.Schedules.Add(schedule);
            _airlineDbContext.SaveChanges();
            return _airlineDbContext.Schedules.Where(x => x.FlightId == schedule.FlightId).ToList();
        }

        public Flight AddFlightToAirline(Flight flight)
        {
            _airlineDbContext.Flights.Add(flight);
            _airlineDbContext.SaveChanges();
            return flight;
        }

        public Airline ModifyAirline(Airline airline)
        {
            Airline airline1 = _airlineDbContext.Airlines.FirstOrDefault(x => x.Id == airline.Id);
            if (airline1 != null)
            {
                airline1.Name = airline.Name;
                airline1.Logo = airline.Logo;
                airline1.ContactNumber = airline.ContactNumber;
                airline1.Address = airline.Address;
            }
            _airlineDbContext.SaveChanges();
            return airline1;
        }

        public Schedule ModifyFlightSchedule(Schedule schedule)
        {
            Schedule schedule1 = _airlineDbContext.Schedules.FirstOrDefault(x => x.Id == schedule.Id);
            if (schedule1 != null)
            {
                schedule1.Destination = schedule.Destination;
                schedule1.LandingTime = schedule.LandingTime;
                schedule1.TakeOffTime = schedule.TakeOffTime;
                schedule1.ScheduleDays = schedule.ScheduleDays;
                schedule1.FlightId = schedule.FlightId;
                schedule1.Source = schedule.Source;
            }
            _airlineDbContext.SaveChanges();
            return schedule1;
        }

        public Airline RegisterAirline(Airline airline)
        {
            _airlineDbContext.Airlines.Add(airline);
            _airlineDbContext.SaveChanges();
            return airline;
        }

        public List<Airline> GetAllAirlines()
        {
            return _airlineDbContext.Airlines
                                    .Include(x => x.Flights)
                                    .ToList();

        }

        public Schedule GetScheduleByFlight(int flightId)
        {
            return _airlineDbContext.Schedules.FirstOrDefault(x => x.FlightId == flightId);
        }

        public Airline GetAirlineById(int id)
        {
            Airline airline = _airlineDbContext.Airlines.FirstOrDefault(x => x.Id == id);
            if (airline.Id > 0)
            {
                return airline;
            }
            return new Airline();
        }

        public List<Flight> GetAllFlights()
        {
            return _airlineDbContext.Flights.Include(x => x.Airline)
                                            .Include(x => x.Schedule)
                                            .ToList();
        }

        public Flight GetFlightById(int id)
        {
            Flight flight = _airlineDbContext.Flights.Include(x => x.Airline)
                                                     .Include(x => x.Schedule)
                                                     .FirstOrDefault(x => x.Id == id);
            if(flight.Id > 0)
            {
                return flight;
            }
            return new Flight();
        }

        public Flight ModifyFlight(Flight flight)
        {
            Flight flight1 = _airlineDbContext.Flights.FirstOrDefault(x => x.Id == flight.Id);
            if(flight1 != null)
            {
                flight1.TotalSeats = flight.TotalSeats;
                flight1.BusinessSeats = flight.BusinessSeats;
                flight1.EconomySeats = flight.EconomySeats;
                flight1.BusinessPrice = flight.BusinessPrice;
                flight1.EconomyPrice = flight.EconomyPrice;
                _airlineDbContext.SaveChanges();
                return flight1;
            }
            else
            {
                return new Flight();
            }
            
        }
    }
}
