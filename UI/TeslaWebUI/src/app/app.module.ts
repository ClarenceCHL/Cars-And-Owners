import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { ShowCarsComponent } from './cars/show-cars/show-cars.component';
import { AddEditCarsComponent } from './cars/add-edit-cars/add-edit-cars.component';
import { CarownersComponent } from './carowners/carowners.component';
import { ShowOwnersComponent } from './carowners/show-owners/show-owners.component';
import { AddEditOwnersComponent } from './carowners/add-edit-owners/add-edit-owners.component';
import { SharedService } from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    ShowCarsComponent,
    AddEditCarsComponent,
    CarownersComponent,
    ShowOwnersComponent,
    AddEditOwnersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
