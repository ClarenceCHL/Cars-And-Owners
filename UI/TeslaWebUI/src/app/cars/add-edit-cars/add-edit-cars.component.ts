import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-cars',
  templateUrl: './add-edit-cars.component.html',
  styleUrls: ['./add-edit-cars.component.css']
})
export class AddEditCarsComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() cars:any;
  Carid:string="";
  Models:string="";


  ngOnInit(): void {
    this.Carid = this.cars.Carid;
    this.Models = this.cars.Models;
  }

  addCar(){
    var val = {Carid:this.Carid,
                Models:this.Models};
    this.service.addCars(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateCar(){
    var val = {Carid:this.Carid,
      Models:this.Models};
    this.service.updateCars(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}
