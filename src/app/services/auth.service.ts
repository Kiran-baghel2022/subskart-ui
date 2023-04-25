import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private http: HttpClient) { }
  private generateTokenUrl = 'http://localhost:8082/authenticate';

  //call token api from server
  generateToken(loginObj: any) {
    return this.http.post(`${this.generateTokenUrl}`, loginObj);
  }
  loginUser(token: string) {
    localStorage.setItem("token", token);
    console.log("loginUser :" ,token);
    return true;
  }
  isLoggedIn() {
    let token = localStorage.getItem("token");
    if (token == undefined || token === '' || token == null) {
      return false;
    } else {
      return true;
    }
  }
  logout() {
    localStorage.removeItem("token");
    return true;
  }

  getToken() {
    return localStorage.getItem('token');
  }




  //   login(username: String, password: String) {
  //     if (username === 'kiran' && password === 'kiran') {
  //       return 200;
  //     }else{
  //       return 403;
  //     }
  //   }
  //   logout() {
  // this.router.navigate(['login']);
  //   }
}
