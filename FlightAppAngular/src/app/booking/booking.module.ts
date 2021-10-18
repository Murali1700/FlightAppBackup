import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'SearchFlight',component: SearchFlightComponent }
];

@NgModule({
  declarations: [
    SearchFlightComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BookingModule { }
