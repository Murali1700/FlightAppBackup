using BookingMicroService.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookingMicroService.Repository
{
    public class BookingRepository : IBookingRepository
    {
        private BookingDbContext _bookingContext;

        public BookingRepository(BookingDbContext bookingDbContext)
        {
            _bookingContext = bookingDbContext;
        }

        public Discount AddDiscount(Discount discount)
        {
            _bookingContext.Discounts.Add(discount);
            _bookingContext.SaveChanges();
            return discount;
        }

        public Booking AddBooking(Booking booking)
        {
            _bookingContext.Bookings.Add(booking);
            foreach (var passenger in booking.Passengers)
            {
                _bookingContext.Passengers.Add(passenger);
            }
            _bookingContext.SaveChanges();
            return booking;
        }

        public string DeleteBooking(int PNR)
        {
            Booking booking = _bookingContext.Bookings.FirstOrDefault(x => x.PNRNumber == PNR);
            if (booking == null)
            {
                return "Not Found";
            }
            List<Passenger> passengers = _bookingContext.Passengers.Where(x => x.BookingId == booking.Id).ToList();
            _bookingContext.Passengers.RemoveRange(passengers);
            _bookingContext.Remove(booking);
            _bookingContext.SaveChanges();
            return "Ok";
        }

        public List<Booking> GetAllBookings(int userId)
        {
            return _bookingContext.Bookings.Where(x => x.UserId == userId).ToList();
        }

        public Booking GetBookingByPNR(int PNR)
        {
            return _bookingContext.Bookings.FirstOrDefault(x => x.PNRNumber == PNR);
        }
    }
}
