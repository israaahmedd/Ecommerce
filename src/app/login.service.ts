import { LoginComponent } from './login/login.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userData=new BehaviorSubject(null);

  constructor(private _HttpClient:HttpClient , private _Router:Router) { }
  loginApi(userlogin:object):Observable<any>{
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin',userlogin)
  }

  decodeUserData(){
  let dataEncoded = JSON.stringify(localStorage.getItem('userToken'));
  let dataDecoded:any= jwtDecode(dataEncoded);
  this.userData.next(dataDecoded);
  }
  logOut(){
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this._Router.navigate(['/login'])

  }

}
