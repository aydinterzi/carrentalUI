import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  baseUrl="https://localhost:7168/api/cars/";
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    return this.httpClient.get<ListResponseModel<Car>>(this.baseUrl+"getall");
  }

  getCarsByBrand(id:number):Observable<ListResponseModel<Car>>{
    return this.httpClient.get<ListResponseModel<Car>>(this.baseUrl+"getcarsbybrand?id="+id);
  }

  getCarsByColor(id:number):Observable<ListResponseModel<Car>>{
    return this.httpClient.get<ListResponseModel<Car>>(this.baseUrl+"getcarsbycolor?id="+id);
  }
}
