import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Airline } from 'app/model/airline';
import { Flight } from 'app/model/flight';
import { AirlineService } from 'app/service/airline.service';
import { AirlineModule } from '../airline.module';

@Component({
  selector: 'app-manage-flight',
  templateUrl: './manage-flight.component.html',
  styleUrls: ['./manage-flight.component.scss']
})
export class ManageFlightComponent implements OnInit {

  flightModel: Flight = new Flight();
  airlines: Array<Airline>;
  action: string;
  constructor(private activeRoute: ActivatedRoute, private airlineService: AirlineService,
    private router: Router) { }

  ngOnInit(): void {
    this.airlineService.getAllAirline()
      .subscribe((x: Array<Airline>) => {
        this.airlines = x;
        this.flightModel.airlineId = 0;
      });
    var airlineId = +this.activeRoute.snapshot.paramMap.get('airlineId');
    if(airlineId != 0) {
      this.flightModel.airlineId = airlineId;
    }
    var id = +this.activeRoute.snapshot.paramMap.get('id');
    if (id != 0) {
      this.airlineService.getFlightById(id)
        .subscribe((x: Flight) => {
          this.flightModel = x;
          this.action = "Update";
          console.log(this.flightModel);
        });
    } else {
      this.flightModel = new Flight();
      this.flightModel.airlineId = 0;
      this.action = "Add";
    }
  }

  onSubmit(): void {
    if (this.action == "Add") {
      this.airlineService.registerFlight(this.flightModel)
        .subscribe((x: Flight) => {
          this.navigateViewFlight();
        });
    } else {
      this.airlineService.modifyFlight(this.flightModel)
        .subscribe((x: Flight) => {
          this.navigateViewFlight();
        })
    }
  }

  navigateViewFlight(): void {
    this.router.navigate(['Flights'])
  }

  calculateTotalSeats(): void {
    this.flightModel.totalSeats = +this.flightModel.economySeats + +this.flightModel.businessSeats;
  }
}
