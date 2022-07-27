import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-cars',
  templateUrl: './show-cars.component.html',
  styleUrls: ['./show-cars.component.css']
})
export class ShowCarsComponent implements OnInit {

  constructor(private service:SharedService) { }

  CarsList:any = [];

  ModalTitle:string="";
  ActivateAddEditCarComp:boolean=false;
  cars:any;

  CarIdFilter:string="";
  CarNameFilter:string="";
  CarListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshCarsList();
  }

  addClick(){
    this.cars={
      Carid:0,
      Models:""
    }
    this.ModalTitle="新增车型";
    this.ActivateAddEditCarComp=true;
  }

  editClick(item:any){
    this.cars = item;
    this.ModalTitle = "编辑车型名称";
    this.ActivateAddEditCarComp = true;
  }

  deleteClick(item:any){
    if(confirm('确认删除？')){
      this.service.deleteCars(item.Carid).subscribe(data=>{
        alert(data.toString());
        this.refreshCarsList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditCarComp=false;
    this.refreshCarsList();
  }

  refreshCarsList(){
    this.service.getCarsList().subscribe(data=>{
      this.CarsList = data;
      this.CarListWithoutFilter = data;
    });
  }

  filterFn(){
    var CarIdFilter = this.CarIdFilter;
    var CarNameFilter = this.CarNameFilter;

    this.CarsList = this.CarListWithoutFilter.filter(function(el:any){
      return el.Carid.toString().toLowerCase().includes(
        CarIdFilter.toString().trim().toLowerCase()
      )&&
      el.Models.toString().toLowerCase().includes(
        CarNameFilter.toString().trim().toLowerCase()
      )
    });
  }

  sortResult(prop:any, asc:any){
    this.CarsList = this.CarListWithoutFilter.sort(function(a:any, b:any){
      if(asc){
        return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
      }else{
        return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
      }
    })
  }
}
