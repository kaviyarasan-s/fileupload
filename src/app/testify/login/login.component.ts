import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [Login]
})
export class LoginComponent implements OnInit {

  login: Login = {
    username:'',
    password:''
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('User Login details : ' + this.login.username + " " + this.login.password);
  }
}
