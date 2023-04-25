import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
loginObj:any={
  usernameOrEmail:'',
  password:''
}


  // username = "kiran";
  // password = "kiran";
  errorMsg = "";
  constructor(private auth: AuthService, private router: Router) {

  }

  login() {
    if (this.loginObj.usernameOrEmail.trim().length === 0) {
      this.errorMsg = "usernameOrEmail is required";
    } else if (this.loginObj.password.trim().length === 0) {
      this.errorMsg = "Password is required";
    } else {

      this.auth.generateToken(this.loginObj).subscribe(
      (response:any)=>{
        console.log(response.token);
        this.auth.loginUser(response.token);
        this.router.navigate(['admin'])
        },error=>{
          console.log(error);
        }
      );
      this.errorMsg = "";
      // let res = this.auth.login(this.loginObj.username, this.loginObj.password);
      // if (res == 200) {
      //   this.router.navigate(['item'])
      // } if (res == 403) {
      //   this.errorMsg = "Invalid Credentials!"
      // }
    }
  }
}
