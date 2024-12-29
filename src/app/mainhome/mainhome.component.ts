import { Component } from '@angular/core';
import { ProductsService } from './../products.service';
import { CartService } from '../cart.service';
import { ToasterService } from '../toaster.service';


@Component({
  selector: 'app-mainhome',
  templateUrl: './mainhome.component.html',
  styleUrls: ['./mainhome.component.css']
})
export class MainhomeComponent {

  products: any[] = [];
  constructor(private _ProductsService: ProductsService,
    private _CartService: CartService,
    private _ToasterService: ToasterService
  ) { }
  showSuccessToast() {
    this._ToasterService.showSuccess('This is item has added successfuly!');
    console.log("k")
  }

  showErrorToast() {
   
    this._ToasterService.showError('This is an error toast.');
  }


  addToCart(productId: string) {
    this._CartService.addToCart(productId).subscribe({
      next:(response) => {
        this._CartService.numberOfCartItems.next(response.numOfCartItems),
        console.log(response)
      },
      error: (err) => { console.log(err) }
    })
  }
  ngOnInit(): void {





    // this.extractedProducts = this.products.filter(product => this.desiredIds.includes(product.id));


    this._ProductsService.getProducts().subscribe({
      next: (response) => this.products = response.data

    })



  };

}
