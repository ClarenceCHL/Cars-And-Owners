import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-owners',
  templateUrl: './show-owners.component.html',
  styleUrls: ['./show-owners.component.css']
})
export class ShowOwnersComponent implements OnInit {

  constructor(private service:SharedService) { }

  CarOwnersList:any = [];

  ModalTitle:string="";
  ActivateAddEditCarOwnerComp:boolean=false;
  carowners:any;
  ngOnInit(): void {
    this.refreshCarOwnersList();
  }

  addClick(){
    this.carowners={
      Ownerid:0,
      OwnerName:"",
      OwnerAge:"",
      Models:"",
      DataOfPurchase:"",
      PhotoFileName:"anonymous.png"
    }
    this.ModalTitle="新增车主";
    this.ActivateAddEditCarOwnerComp=true;
  }

  editClick(item:any){
    this.carowners = item;
    this.ModalTitle = "编辑车型名称";
    this.ActivateAddEditCarOwnerComp = true;
  }

  deleteClick(item:any){
    if(confirm('确认删除？')){
      this.service.deleteCarOwners(item.Ownerid).subscribe(data=>{
        alert(data.toString());
        this.refreshCarOwnersList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditCarOwnerComp=false;
    this.refreshCarOwnersList();
  }

  refreshCarOwnersList(){
    this.service.getCarOwnersList().subscribe(data=>{
      this.CarOwnersList = data;
    });
  }
}
