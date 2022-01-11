import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:Car[];
  constructor(private activatedRoute:ActivatedRoute,private carService:CarService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param=>{
      if(param["brandId"]){
        this.getCarsByBrand(param["brandId"]);
      }
      else if(param["colorId"]){
        this.getCarsByColor(param["colorId"]);
      }
      else
        this.getCars();

      })
  }

  getCars(){
    this.carService.getCars().subscribe(next=>{
      this.cars=next.data;
    })
  }

  getCarsByBrand(id:number){
    this.carService.getCarsByBrand(id).subscribe(next=>{
      this.cars=next.data;
    })
  }

  getCarsByColor(id:number){
    this.carService.getCarsByColor(id).subscribe(next=>{
      this.cars=next.data;
    })
  }
}
