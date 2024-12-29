import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../products.service';
import { Products } from '../products';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  products: Products[] = [];
  searchTerm:string =" ";

  
  constructor(private _ProductsService: ProductsService){}
  ngOnInit(): void {
    this._ProductsService.getProducts().subscribe({
      next: (response) =>
       this.products = response.data
      

    })
  }
}
