import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AngularMaterialComponent } from './angular-material/angular-material.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatComponentsModule } from '../app/mat-components/mat-components.module';
import { ServiceCheckListComponent } from './service-check-list/service-check-list.component';
import { ServiceCheckListApproveComponent } from './service-check-list-approve/service-check-list-approve.component';
import { LoginModule } from './testify/login/login.module';


const route: Routes = [
  
];

@NgModule({
  declarations: [
    AppComponent,
    AngularMaterialComponent,
    ServiceCheckListComponent,
    ServiceCheckListApproveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(route),
    HttpClientModule,
    BrowserAnimationsModule,
    MatComponentsModule,
    LoginModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
