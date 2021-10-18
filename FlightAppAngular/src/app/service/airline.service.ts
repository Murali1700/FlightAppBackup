import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Airline } from 'app/model/airline';
import { Flight } from 'app/model/flight';
import { Schedule } from 'app/model/schedule';
import { ScheduleDays } from 'app/model/scheduleDays';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AirlineService {

  constructor(private http: HttpClient) { }

  getAllAirline(): Observable<Array<Airline>> {
    const URL = 'http://localhost:63605/api/Airline'
    const headers = { 'content-type': 'application/json' }
    return this.http.get<Array<Airline>>(URL, { 'headers': headers })
  }

  getAirlineById(id: number): Observable<Airline> {
    const URL = 'http://localhost:63605/GetAirlineById'
    const headers = { 'content-type': 'application/json' }
    return this.http.get<Airline>(URL + '/' + id, { 'headers': headers })
  }

  registerAirline(airline: Airline): Observable<Airline> {
    const URL = 'http://localhost:63605/RegisterAirline'
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(airline);
    return this.http.post<Airline>(URL, body, { 'headers': headers })
  }

  modifyAirline(airline: Airline): Observable<Airline> {
    const URL = 'http://localhost:63605/ModifyAirline'
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(airline);
    return this.http.put<Airline>(URL, body, { 'headers': headers })
  }

  getAllFlight(): Observable<Array<Flight>> {
    const URL = 'http://localhost:63605/GetAllFlights'
    const headers = { 'content-type': 'application/json' }
    return this.http.get<Array<Flight>>(URL, { 'headers': headers })
  }

  getFlightById(id: number): Observable<Flight> {
    const URL = 'http://localhost:63605/GetFlightById'
    const headers = { 'content-type': 'application/json' }
    return this.http.get<Flight>(URL + '/' + id, { 'headers': headers })
  }

  registerFlight(flight: Flight): Observable<Flight> {
    const URL = 'http://localhost:63605/AddFlight'
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(flight);
    return this.http.post<Flight>(URL, body, { 'headers': headers })
  }

  modifyFlight(flight: Flight): Observable<Flight> {
    const URL = 'http://localhost:63605/ModifyFlight'
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(flight);
    return this.http.put<Flight>(URL, body, { 'headers': headers })
  }

  addSchedule(schedule: Schedule): Observable<any> {
    const URL = 'http://localhost:63605/AddSchedule'
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(schedule);
    return this.http.post<any>(URL, body, { 'headers': headers })
  }

  modifySchedule(schedule: Schedule): Observable<any> {
    const URL = 'http://localhost:63605/ModifySchedule'
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(schedule);
    return this.http.put<any>(URL, body, { 'headers': headers })
  }
}
