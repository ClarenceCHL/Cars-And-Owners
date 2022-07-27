import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-owners',
  templateUrl: './add-edit-owners.component.html',
  styleUrls: ['./add-edit-owners.component.css']
})
export class AddEditOwnersComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() carowners:any;
  Ownerid:string="";
  OwnerName:string="";
  OwnerAge:string="";
  Models:string="";
  DateOfPurchase:string="";
  PhotoFileName:string="";
  PhotoFilePath:string="";

  CarsList:any=[];


  ngOnInit(): void {
    this.loadCarsList();
  }

  loadCarsList(){
    this.service.getAllModelNames().subscribe((data:any)=>{
      this.CarsList=data;
      this.Ownerid=this.carowners.Ownerid;
      this.OwnerName=this.carowners.OwnerName;
      this.OwnerAge=this.carowners.OwnerAge;
      this.Models=this.carowners.Models;
      this.DateOfPurchase=this.carowners.DataOfPurchase;
      this.PhotoFileName=this.carowners.PhotoFileName;
      this.PhotoFilePath=this.service.Photo+this.PhotoFileName;
    });
  }

  addOwner(){
    var val = {Ownerid:this.Ownerid,
                OwnerName:this.OwnerName,
                OwnerAge:this.OwnerAge,
                Models:this.Models,
                DateOfPurchase:this.DateOfPurchase,
                PhotoFileName:this.PhotoFileName};
    this.service.addCarOwners(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateCarOwner(){
    var val = {Ownerid:this.Ownerid,
      OwnerName:this.OwnerName,
      OwnerAge:this.OwnerAge,
      Models:this.Models,
      DateOfPurchase:this.DateOfPurchase,
      PhotoFileName:this.PhotoFileName};
    this.service.updateCarOwners(val).subscribe(res=>{
    alert(res.toString());
    });
  }

  uploadPhoto(event:any){
    var file = event.target.files[0];
    const formData:FormData=new FormData;
    formData.append('上传文件', file, file.name);
    this.service.uploadPhoto(formData).subscribe((data:any)=>{
      this.PhotoFileName = data.toString();
      this.PhotoFilePath = this.service.Photo + this.PhotoFileName;
    })
  }

}
