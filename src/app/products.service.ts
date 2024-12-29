
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private _HttpClient: HttpClient) { }

  getProducts():Observable <any> 
  {


  // return  this._HttpClient.get(`https://dummyjson.com/products`)
  return  this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products`)


}

getCat():Observable <any>
{
  return  this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories`)

}


getProductsDetails(id:string):Observable<any>{
  return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
}

}