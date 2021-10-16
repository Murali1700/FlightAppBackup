import { Flight } from "./flight";

export class Airline {
    id: number;
    name: string;
    logo: string;
    contactNumber: string;
    address: string;
    Flights = Array<Flight>(); 
}