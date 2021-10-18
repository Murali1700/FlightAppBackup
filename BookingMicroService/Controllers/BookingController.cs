using BookingMicroService.Model;
using BookingMicroService.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookingMicroService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookingController : ControllerBase
    {
        private IBookingRepository _bookingRepository;

        public BookingController(IBookingRepository bookingRepository)
        {
            _bookingRepository = bookingRepository;
        }

        [HttpPost("~/ AddDiscount")]
        public IActionResult AddDiscount([FromBody] Discount discount)
        {
            Discount discount1 = _bookingRepository.AddDiscount(discount);
            if (discount1 == null)
            {
                return BadRequest("Unable to add discount");
            }
            return Ok(discount1);
        }

        [HttpPost("~/AddBooking")]
        public IActionResult AddBooking([FromBody] Booking booking)
        {
            Booking booking1 = _bookingRepository.AddBooking(booking);
            return Ok(booking1);
        }

        [HttpDelete("~/DeleteBooking/{PNR}")]
        public IActionResult DeleteBooking(int PNR)
        {
            string status = _bookingRepository.DeleteBooking(PNR);
            if (status == "Not Found")
            {
                return NotFound("Booking not found");
            }
            return Ok("Deleted Successfully");
        }

        [HttpGet]
        [Route("api/[controller]/{userId}")]
        public IActionResult GetAllBookings(int userId)
        {
            List<Booking> bookings = _bookingRepository.GetAllBookings(userId);
            return Ok(bookings);
        }

        [HttpGet]
        [Route("api/[controller]/{PNR}")]
        public IActionResult GetBookingByPNR(int PNR)
        {
            Booking booking = _bookingRepository.GetBookingByPNR(PNR);
            if (booking == null)
            {
                return NotFound("Incorrect PNR or booking not found");
            }
            return Ok(booking);
        }
    }
}
