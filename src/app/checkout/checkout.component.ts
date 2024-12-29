import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';
import { CartService } from '../cart.service';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})

export class CheckoutComponent implements OnInit {
  shippingPrice: number = 25;
  cartDetails: any = null;
  productDetails: any;
  productId: any;

  shippingAddress: FormGroup = new FormGroup({
    details: new FormControl(null),
    phone: new FormControl(null),
    city: new FormControl(null),
  })

  constructor(private _CartService: CartService,
    private _ProductsService: ProductsService,
    private _ActivatedRoute: ActivatedRoute) {
    //64bda268270bce84aa782f69
  }
  navigateToPage(url: string) {
    window.location.href = url;
  }
  handleSubmet(shippingAddress: FormGroup) {
    // console.log(shippingAddress.value)
    this._CartService.onlinePayment(shippingAddress.value, '64c04984da99720819697053').subscribe({
      next: (respose: any) => {
        this.navigateToPage(respose.session.url);
        console.log(respose.session.url)
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

      this._ActivatedRoute.paramMap.subscribe((params) => {
        this.productId = params.get('id')
      });
    this._ProductsService.getProductsDetails(this.productId).subscribe({
      next: (response) => {
        this.productDetails = response.data,
          console.log(this.productDetails)
      }
    })
  }
}
