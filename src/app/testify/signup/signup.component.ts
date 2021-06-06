import { Component, OnInit } from '@angular/core';
import { Group } from '../models/group';
import { Qualification } from '../models/qualification';
import { Signup } from '../models/signup';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  groups: Group[] = [
    {
      id: 1,
      name: 'JAVA'
    },
    {
      id: 2,
      name: 'C++'
    },
    {
      id: 3,
      name: 'C'
    },
    {
      id: 4,
      name: '.Net'
    },
    {
      id: 5,
      name: 'Angular'
    }
  ];

  qualifications: Qualification[] = [
    {
      id: 1,
      name: 'B.E'
    },
    {
      id: 2,
      name: 'M.E'
    },
    {
      id: 3,
      name: 'B.C.A'
    },
    {
      id: 4,
      name: 'M.C.A'
    },
    {
      id: 5,
      name: 'Others'
    }
  ];

  signup: Signup = {
    id:0,
    profileName:'',
    dob: new Date,
    email:'',
    phoneNumber:0,
    roleId:0,
    groupId: 0,
    qualificationId: 0,
    comments:''
  };

  constructor(
    private _matSnackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }


  saveGroup(group){
    console.log('Selected Group : ' + group.value);
  }
  
  submit(signupForm){
    console.log('Signup Form :' + signupForm.value);
    this._matSnackBar.open('Form Submitted','', {
      duration:500
    });
  }
}
