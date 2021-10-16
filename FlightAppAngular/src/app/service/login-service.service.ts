import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'app/model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  validateUser(user:User): Observable<User> {
    const URL = 'http://localhost:63594/api/User'
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(user);
    return this.http.post<User>(URL,body,{'headers':headers})
  }
  
}
