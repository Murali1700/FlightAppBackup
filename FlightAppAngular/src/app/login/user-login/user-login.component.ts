import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'app/model/user';
import { LoginService } from 'app/service/login-service.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  @Output() setUser: EventEmitter<string> = new EventEmitter<string>();
  userModel: User = new User();
  constructor(private loginService:LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.loginService.validateUser(this.userModel)
    .subscribe((x: User) => {
      this.userModel = x;
      this.setUserEvent(this.userModel);
    })
  }

  setUserEvent(user: User): void {
    console.log('setUser' + this.userModel.isAdmin);
    if(this.userModel.isAdmin) {
      this.setUser.emit("Admin");
    } else {
      this.setUser.emit("User");
    }
  }

}
