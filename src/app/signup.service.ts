import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private _HttpClient:HttpClient) { }
  signupApi(userData:object):Observable<any>
  {
return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup',userData)
  }
}  
//https://ecommerce.routemisr.com/api/v1/auth/signup