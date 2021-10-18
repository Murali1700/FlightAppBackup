import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewAirlineComponent } from './view-airline/view-airline.component';
import { RouterModule, Routes } from '@angular/router';
import { RegisterAirlineComponent } from './register-airline/register-airline.component';
import { FormsModule } from '@angular/forms';
import { ViewFlightComponent } from './view-flight/view-flight.component';
import { ManageFlightComponent } from './manage-flight/manage-flight.component';
import { ManageScheduleComponent } from './manage-schedule/manage-schedule.component';


const routes: Routes = [
  { path: 'ViewAirline',component: ViewAirlineComponent },
  { path: 'Flights',component: ViewFlightComponent },
  { path: 'FlightSchedule',component: ManageScheduleComponent },
  { path: 'AddAirline',component: RegisterAirlineComponent },
  { path: 'AddFlight',component: ManageFlightComponent },
  { path: 'AddFlight/:airlineId',component: ManageFlightComponent },
  { path: 'UpdateAirline/:id',component: RegisterAirlineComponent },
  { path: 'UpdateFlight/:id',component: ManageFlightComponent }
];

@NgModule({
  declarations: [
    ViewAirlineComponent,
    RegisterAirlineComponent,
    ViewFlightComponent,
    ManageFlightComponent,
    ManageScheduleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AirlineModule { }
