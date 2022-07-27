import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarsComponent } from './cars/cars.component';
import { CarownersComponent } from './carowners/carowners.component';

const routes: Routes = [
  {path:'cars', component:CarsComponent},
  {path:'carowners', component:CarownersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
