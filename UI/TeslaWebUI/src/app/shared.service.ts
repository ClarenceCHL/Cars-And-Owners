import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIurl = "http://localhost:5235/api";
readonly Photo = "http://localhost:5235/Photos";
  constructor(private http:HttpClient) { }

  getCarsList():Observable<any[]>{
    return this.http.get<any>(this.APIurl+'/Cars');
  }

  addCars(val:any){
    return this.http.post(this.APIurl+'/Cars', val);
  }

  updateCars(val:any){
    return this.http.put(this.APIurl+'/Cars', val);
  }

  deleteCars(val:any){
    return this.http.delete(this.APIurl+'/Cars/' + val);
  }

  getCarOwnersList():Observable<any[]>{
    return this.http.get<any>(this.APIurl+'/CarOwners');
  }

  addCarOwners(val:any){
    return this.http.post(this.APIurl+'/CarOwners', val);
  }

  updateCarOwners(val:any){
    return this.http.put(this.APIurl+'/CarOwners', val);
  }

  deleteCarOwners(val:any){
    return this.http.delete(this.APIurl+'/CarOwners/' + val);
  }

  uploadPhoto(val:any){
    return this.http.post(this.APIurl+'/CarOwners/SaveFile', val);
  }

  getAllModelNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIurl+'/CarOwners/GetAllModelNames');
  }
}
