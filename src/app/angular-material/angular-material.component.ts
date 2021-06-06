import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {DomSanitizer} from '@angular/platform-browser';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-angular-material',
  templateUrl: './angular-material.component.html',
  styleUrls: ['./angular-material.component.css']
})
export class AngularMaterialComponent implements OnInit {

  numbers = new FormControl();

  options = ['one','second','three'];


  constructor(
    private _snacker: MatSnackBar
  ) {
  
  }

  ngOnInit(): void {
  }

  setGender(e){
    console.log(e.checked);
    
  }

  comments = [
    {
    "comment" : ""
  }
  ];

  addrow(){
    this.comments.push({
      "comment":""
    });
  }

  removerow(){
    this.comments.pop();
  }

  showSnackBar(){
    this._snacker.open("Pop up Called",'Close', {
      duration : 2000
    });
  }
}


