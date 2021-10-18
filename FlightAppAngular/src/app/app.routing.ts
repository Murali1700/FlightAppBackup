import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { UserLoginComponent } from './login/user-login/user-login.component';
import { AppComponent } from './app.component';
import { SearchFlightComponent } from './booking/search-flight/search-flight.component';
import { ViewAirlineComponent } from './airline/view-airline/view-airline.component';
import { LoginModule } from './login/login.module';
import { AirlineModule } from './airline/airline.module';
import { BookingModule } from './booking/booking.module';

const routes: Routes = [
  {path: 'App', component: AppComponent },
  {path: 'Login', component: UserLoginComponent},
  {path: '', redirectTo: 'Login', component: UserLoginComponent}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    LoginModule,
    AirlineModule,
    BookingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
