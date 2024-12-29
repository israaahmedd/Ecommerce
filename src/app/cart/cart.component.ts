
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ToasterService } from '../toaster.service';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartDetails: any = null;
  productDetails:any;
productId:any;

  constructor(private _CartService: CartService,
    private _ToasterService: ToasterService,private _ProductsService:ProductsService,private _ActivatedRoute:ActivatedRoute
  ) { }
  showSuccessToast() {
    this._ToasterService.showSuccess('the quantity has been increased');
    console.log("k")
  }

  showErrorToast() {
    this._ToasterService.showError('the quantity has been decreased');
  }



  removeItem(productId: string) {
    this._CartService.deleteSpaItem(productId).subscribe({
      next: (response) => {
        this.cartDetails = response.data;
        console.log(response.data)
      },
      error: (err) => console.log(err)


    })
  }


  updateCount(productId: string, count: number) {
    this._CartService.updateCount(productId, count).subscribe({
      next: (response) => {
        this.cartDetails = response.data;

      },
      error: (err) => console.log(err)
    })
  }

  ngOnInit(): void {
    this._CartService.getLoggedUserCart().subscribe({
      next: (response) => {
        this.cartDetails = response.data,
        console.log(response.data)
      }

      ,
      error: (err) => console.log(err)
    }),

    this._ActivatedRoute.paramMap.subscribe((params)=>{
      this.productId = params.get('id')
        });
        this._ProductsService.getProductsDetails(this.productId).subscribe({
          next:(response)=> {this.productDetails=response.data,
          console.log(this.productDetails)}
        })
  }
}
