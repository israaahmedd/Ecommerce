import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, count } from 'rxjs';
BehaviorSubject
@Injectable({
  providedIn: 'root'
})
export class CartService {
  numberOfCartItems=new BehaviorSubject(0);
headers:any={
  token:localStorage.getItem('userToken')
}
  constructor(private _HttpClient:HttpClient) {
   this.getLoggedUserCart().subscribe({
    next:(response)=>{
      this.numberOfCartItems.next(response.numOfCartItems)
      console.log(response)
    },
    error:(err)=>console.log(err)
   })
   }

  addToCart(productId:string):Observable <any>{
    return this._HttpClient.post (`https://ecommerce.routemisr.com/api/v1/cart`
    ,{productId:productId},{headers:this.headers}
    )
  }

  getLoggedUserCart(): Observable<any>{
 return this._HttpClient.get (`https://ecommerce.routemisr.com/api/v1/cart`
,{headers:this.headers}
    )
  }

deleteSpaItem(productId:string):Observable<any>{
  return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, 
  {headers:this.headers})
}
updateCount(productId:string,count:number):Observable<any>{
  return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, 
  {
    count: count
},
  {headers:this.headers})
}

onlinePayment(shippingAddress:any,productId:string):Observable<any>{
  return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${productId}?url=http://localhost:4200`, 
  {
    
      shippingAddress:shippingAddress,
     
      
  
},
  {headers:this.headers})
}


}
