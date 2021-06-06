import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  detail: string;
}

@Component({
  selector: 'app-service-check-list-approve',
  templateUrl: './service-check-list-approve.component.html',
  styleUrls: ['./service-check-list-approve.component.css']
})
export class ServiceCheckListApproveComponent implements OnInit {

  constructor(
    private matDialogRef : MatDialogRef<ServiceCheckListApproveComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 

  }

  ngOnInit(): void {}

  onNoClick(): void {
    this.matDialogRef.close();
  }
}
