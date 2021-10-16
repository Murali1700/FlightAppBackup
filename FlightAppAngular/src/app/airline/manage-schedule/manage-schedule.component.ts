import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Airline } from 'app/model/airline';
import { Flight } from 'app/model/flight';
import { Schedule } from 'app/model/schedule';
import { ScheduleDays } from 'app/model/scheduleDays';
import { AirlineService } from 'app/service/airline.service';
import { ScheduleDaysService } from 'app/service/schedule-days.service';
import { bigqueryconnection_v1beta1 } from 'googleapis';
import { cloneDeep } from 'lodash';


@Component({
  selector: 'app-manage-schedule',
  templateUrl: './manage-schedule.component.html',
  styleUrls: ['./manage-schedule.component.scss']
})
export class ManageScheduleComponent implements OnInit {

  airlines: Array<Airline> = new Array<Airline>();
  flightModel: Flight = new Flight();
  allFlight: Array<Flight> = new Array<Flight>();
  fliterFlight: Array<Flight> = new Array<Flight>();
  hideFlight: boolean = true;
  hideSchedule: boolean = true;
  addSchedule: boolean = true;
  showAddFlight: boolean = false;

  constructor(private airlineService: AirlineService, private getScheduleDays: ScheduleDaysService,
    private router: Router) { }

  ngOnInit(): void {
    this.flightModel.airlineId = 0;
    this.flightModel.id = 0;
    this.airlineService.getAllAirline()
      .subscribe((x: Array<Airline>) => {
        this.airlines = x;
      });
    this.airlineService.getAllFlight()
      .subscribe((x: Array<Flight>) => {
        this.allFlight = x;
      });
  }

  updateFlight(airlineId: number) {
    if (airlineId > 0) {
      this.hideFlight = false;
    } else if (this.checkFlightPresent(airlineId)) {
      this.hideFlight = true;
      this.showAddFlight = true;
    }
    else {
      this.hideFlight = true;
    }
    this.hideSchedule = true;
    this.resetFlightModel(airlineId);
  }

  checkFlightPresent(airlineId: number): boolean {
    this.allFlight.forEach(x => {
      if (x.airlineId == airlineId) {
        return true;
      }
    });
    return false;
  }

  resetFlightModel(airlineId: number) {
    this.flightModel = cloneDeep(new Flight());
    this.flightModel.airlineId = airlineId;
    this.flightModel.id = 0;
  }

  selectFlightModel(flightId: number) {
    if (flightId > 0) {
      this.allFlight.forEach(x => {
        if (x.id == flightId) {
          this.flightModel = cloneDeep(x);
          console.log(this.flightModel);
        }
      });
      if (this.flightModel.schedule == null) {
        this.addSchedule = true;
        this.flightModel.schedule = new Schedule(this.getScheduleDays);
        this.flightModel.schedule.flightId = this.flightModel.id;
      } else {
        this.addSchedule = false;
        var days = this.flightModel.schedule.scheduleDays.split(',');
        this.flightModel.schedule.schedule = this.getScheduleDays.getScheduleDays();
        console.log(days);
        if (days.length > 0) {
          days.forEach(x => {
            var index = this.flightModel.schedule.schedule.findIndex(y => y.id == +x);
            console.log(index);
            this.flightModel.schedule.schedule[index].value = true;
            console.log(this.flightModel.schedule.schedule)
          })
        }
      }
      this.hideSchedule = false;
      console.log(this.allFlight);
    } else {
      this.hideSchedule = true;
      this.resetFlightModel(this.flightModel.airlineId);
      console.log(this.flightModel);
      console.log(this.allFlight);
    }
  }

  setSchedule(schedule: ScheduleDays) {
    console.log(this.flightModel.schedule.schedule);
  }

  onSubmit(action: string): void {
    this.flightModel.schedule.scheduleDays = "";
    this.flightModel.schedule.schedule.forEach(x => {
      if (x.value) {
        this.flightModel.schedule.scheduleDays += x.id + ',';
      }
    });
    this.flightModel.schedule.scheduleDays = this.flightModel.schedule.scheduleDays.slice(0, -1);
    if (action == 'Add') {
      this.airlineService.addSchedule(this.flightModel.schedule)
        .subscribe(x => {
          console.log(x);
        });
    } else if (action == 'Update') {
      this.airlineService.modifySchedule(this.flightModel.schedule)
        .subscribe(x => {
          console.log(x);
        });
    }
    this.router.navigate(['ViewAirline']);
  }

  routeToAddFlight(): void {
    this.router.navigate(['AddFlight',this.flightModel.airlineId]);
  }
}
