import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit{
constructor(private _ProductsService:ProductsService,private _ActivatedRoute:ActivatedRoute)
{

}
//  images: any[] = []; 
productDetails:any;
productId:any;
ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe((params)=>{
this.productId = params.get('id')
  });
  this._ProductsService.getProductsDetails(this.productId).subscribe({
    next:(response)=> {this.productDetails=response.data,
    console.log(this.productDetails)}
  })
  // this._ProductsService.getProductsDetails(this.productId).subscribe({
  //   next: (response) => this.images = response.data.images.slice(0,1)

  // })
 
}}
