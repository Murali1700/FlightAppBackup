using BookingMicroService.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookingMicroService.Repository
{
    public interface IBookingRepository
    {
        public Discount AddDiscount(Discount discount);
        public Booking AddBooking(Booking booking);
        public Booking GetBookingByPNR(int PNR);
        public List<Booking> GetAllBookings(int userId);
        public string DeleteBooking(int PNR);
    }
}
