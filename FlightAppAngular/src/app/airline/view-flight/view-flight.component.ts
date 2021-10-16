import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from 'app/model/flight';
import { AirlineService } from 'app/service/airline.service';

@Component({
  selector: 'app-view-flight',
  templateUrl: './view-flight.component.html',
  styleUrls: ['./view-flight.component.scss']
})
export class ViewFlightComponent implements OnInit {

  flightModel: Array<Flight>;
  constructor(private airlineService: AirlineService,private router: Router) { }

  ngOnInit(): void {
    this.airlineService.getAllFlight()
      .subscribe((x: Array<Flight>) => {
        this.flightModel = x;
      });
  }

  addFlight(): void {
    this.router.navigate(['AddFlight']);
  }

  updateFlight(flight:Flight): void {
    this.router.navigate(['UpdateFlight',flight.id]);
  }
}
