import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup} from '@angular/forms';
import { RegistorServiceService } from 'services/registor-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
  condition:boolean = false;
  
  registorForm = new FormGroup({
    profileImage :  new FormControl(''),
    name : new FormControl('')
  });

  constructor(
    private _registorService : RegistorServiceService

  ) { }

  ngOnInit(): void {
    
  }

  fileUpload(event){
    this.registorForm.patchValue({
      profileImage : event.target.files[0]
    });
    // alert('File Uploaded Successfully!!!'); 
  }
  submit(){
    alert(this.registorForm.value.profileImage);
    this._registorService.sendDataToServer(this.registorForm.value);
  }

}
