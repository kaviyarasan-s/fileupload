import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ServiceCheckListApproveComponent } from '../service-check-list-approve/service-check-list-approve.component';

@Component({
  selector: 'app-service-check-list',
  templateUrl: './service-check-list.component.html',
  styleUrls: ['./service-check-list.component.css']
})
export class ServiceCheckListComponent implements OnInit {

  _matDialogRef: MatDialogRef<ServiceCheckListApproveComponent>;

  randowNumber = function randomString() {
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    var string_length = 8;
    var randomstring = '';
    for (var i = 0; i < string_length; i++) {
      var rnum = Math.floor(Math.random() * chars.length);
      randomstring += chars.substring(rnum, rnum + 1);
    }
    return randomstring;
  }
  userInputData: any;
  serviceCheckListName: any;
  serviceCheckListDetails: any = [
    {
      "key": this.randowNumber(),
      "value": "",
      "checked": false
    }
  ];
  result: any;
  isOpenDialog: boolean;
  constructor(
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void { }

  addrow() {
    this.serviceCheckListDetails.push(
      {
        "key": this.randowNumber(),
        "value": "",
        "checked": false
      }
    );
  }

  removerow() {
    this.serviceCheckListDetails.pop();
  }

  submit() {
    this.userInputData = {
      "serviceCheckListName": this.serviceCheckListName,
      "serviceCheckListDetails": this.serviceCheckListDetails
    }

    this.isOpenDialog = true;
  }

  openDialog() {
    this._matDialogRef = this.matDialog.open(ServiceCheckListApproveComponent, {
      data: {
        "serviceCheckListName": this.serviceCheckListName,
        "serviceCheckListDetails": this.serviceCheckListDetails
      },
      height: '500px',
      width: '600px'
    });

    this._matDialogRef.afterClosed().subscribe(result => {
      this.result = result
    })
  }
}
