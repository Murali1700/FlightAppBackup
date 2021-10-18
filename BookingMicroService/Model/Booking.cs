using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookingMicroService.Model
{
    public class Booking
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int PNRNumber { get; set; }
        public int FlightId { get; set; }
        public int DiscountId { get; set; }
        public decimal BasePrice { get; set; }
        public decimal TotalCost { get; set; }
        public DateTime Date { get; set; }
        public List<Passenger> Passengers { get; set; }
        public Discount Discount { get; set; }
    }
}
