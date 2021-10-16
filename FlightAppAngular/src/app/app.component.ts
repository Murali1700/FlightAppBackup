import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  userStatus: string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem("userStatus")) {
      this.userStatus = localStorage.getItem("userStatus");
      this.navigateUser(this.userStatus);
    }
  }

  onActivate(componentReference) {
    if (componentReference.setUser) {
      componentReference.setUser.subscribe((x: string) => {
        localStorage.setItem("userStatus", x);
        this.userStatus = x;
        this.navigateUser(this.userStatus);
      });
    }
  }

  navigateUser(status: string): void {
    if (status == "Admin") {
      this.router.navigate(["ViewAirline"]);
    } else if (status == "User") {
      this.router.navigate(['SearchFlight']);
    }
  }

  clearUser(): void {
    localStorage.removeItem("userStatus");
    this.userStatus = "";
  }

}
