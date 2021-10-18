import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Airline } from 'app/model/airline';
import { AirlineService } from 'app/service/airline.service';

@Component({
  selector: 'app-register-airline',
  templateUrl: './register-airline.component.html',
  styleUrls: ['./register-airline.component.scss']
})
export class RegisterAirlineComponent implements OnInit {

  action: string;
  airlineModel: Airline;
  constructor(private activatedRoute: ActivatedRoute, private airlineService: AirlineService,
    private router: Router) { }

  ngOnInit(): void {
    var id = +this.activatedRoute.snapshot.paramMap.get('id');
    console.log(id);
    if (id == 0) {
      this.action = "Add";
      this.airlineModel = new Airline();
    } else {
      this.action = "Update"
      this.airlineService.getAirlineById(id)
        .subscribe((x: Airline) => {
          console.log(x);
          this.airlineModel = x;
        })
    }
  }

  onSubmit(): void {
    if (this.action == "Add") {
      this.airlineService.registerAirline(this.airlineModel)
        .subscribe((x: Airline) => {
          this.navigateViewAirline();
        });
    } else if(this.action == "Update") {
      this.airlineService.modifyAirline(this.airlineModel)
      .subscribe((x: Airline) => {
        this.navigateViewAirline();
      });
    }

  }

  navigateViewAirline(): void {
    this.router.navigate(['ViewAirline']);
  }

}
