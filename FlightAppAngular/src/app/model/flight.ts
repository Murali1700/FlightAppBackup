import { Airline } from "./airline";
import { Schedule } from "./schedule";

export class Flight {
  id: number;
  airlineId: number;
  flightNumber: number;
  totalSeats: number;
  economySeats: number;
  businessSeats: number;
  economyPrice: number;
  businessPrice: number;
  airline: Airline;
  schedule: Schedule;
}