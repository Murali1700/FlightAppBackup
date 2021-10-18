import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Airline } from 'app/model/airline';
import { AirlineService } from 'app/service/airline.service';

@Component({
  selector: 'app-view-airline',
  templateUrl: './view-airline.component.html',
  styleUrls: ['./view-airline.component.scss']
})
export class ViewAirlineComponent implements OnInit {

  airlinesModel: Array<Airline>;
  constructor(private airlineService: AirlineService, private router: Router) { }

  ngOnInit(): void {
    this.airlineService.getAllAirline()
      .subscribe((x: Array<Airline>) => {
        this.airlinesModel = x;
      });
  }

  addAirline() {
    this.router.navigate(['AddAirline']);
  }

  updateAirline(airline:Airline) {
    this.router.navigate(['UpdateAirline',airline.id]);
  }

}
