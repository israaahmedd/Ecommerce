import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-sec-slider',
  templateUrl: './sec-slider.component.html',
  styleUrls: ['./sec-slider.component.css']
})
export class SecSliderComponent implements OnInit {
 categorise:any[]=[];
 customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 500,
    navText: ['', ''],
    responsive: {
      4: {
        items: 8
      },
     
      
      
    },
    nav: false
  }
  constructor(private _ProductsService:ProductsService){}

ngOnInit(): void {
    this._ProductsService.getCat().subscribe({
        next:(response)=>
        this.categorise=response.data
    })
}
 
}
