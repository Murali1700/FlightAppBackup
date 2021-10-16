using AirlineMicroService.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AirlineMicroService.Model
{
    [Route("api/[controller]")]
    [ApiController]
    public class AirlineController : ControllerBase
    {
        private IAirlineRepository _airlineRepository;
        public AirlineController(IAirlineRepository airlineRepository)
        {
            _airlineRepository = airlineRepository;
        }

        [HttpPost("~/AddSchedule")]
        public IActionResult AddSchedule([FromBody] Schedule schedule)
        {
            List<Schedule> schedules = _airlineRepository.AddFightSchedule(schedule);
            return Ok(schedules);
        }

        [HttpPost("~/AddFlight")]
        public IActionResult AddFlight([FromBody] Flight flight)
        {
            Flight flight1 = _airlineRepository.AddFlightToAirline(flight);
            return Ok(flight1);
        }

        [HttpPut("~/ModifySchedule")]
        public IActionResult ModifySchedule([FromBody] Schedule schedule)
        {
            Schedule schedule1 = _airlineRepository.ModifyFlightSchedule(schedule);
            return Ok(schedule1);
        }

        [HttpPut("~/ModifyAirline")]
        public IActionResult ModifyAirline([FromBody] Airline airline)
        {
            Airline airline1 = _airlineRepository.ModifyAirline(airline);
            return Ok(airline1);
        }

        [HttpPost("~/RegisterAirline")]
        public IActionResult RegisterAirline([FromBody] Airline airline)
        {
            Airline airline1 = _airlineRepository.RegisterAirline(airline);
            return Ok(airline1);
        }

        [HttpGet]
        public IActionResult GetAirlines()
        {
            List<Airline> airlines = _airlineRepository.GetAllAirlines();
            return Ok(airlines);
        }

        [HttpGet("~/GetAirlineById/{id:int}")]
        public IActionResult GetAirlineById(int id)
        {
            Airline airline = _airlineRepository.GetAirlineById(id);
            if(airline.Id == 0)
            {
                return NotFound(airline);
            }
            return Ok(airline);
        }

        [HttpGet("~/GetAllFlights")]
        public IActionResult GetAllFlight()
        {
            List<Flight> flights = _airlineRepository.GetAllFlights();
            return Ok(flights);
        }

        [HttpGet("~/GetFlightById/{id:int}")]
        public IActionResult GetFlightById(int id)
        {
            Flight flight = _airlineRepository.GetFlightById(id);
            if (flight.Id == 0)
            {
                return NotFound(flight);
            }
            return Ok(flight);
        }

        [HttpPut("~/ModifyFlight")]
        public IActionResult ModifyFlight([FromBody] Flight flight)
        {
            Flight flight1 = _airlineRepository.ModifyFlight(flight);
            return Ok(flight1);
        }
    }
}
