import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _LoginService:LoginService, private _Router:Router){}
  isLoading:boolean=false;
  apiError:String='';
  loginForm: FormGroup= new FormGroup({
    email: new FormControl(null,[Validators.required,Validators.email]),
    password: new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{5,20}$/)]),
   
  
   })
   handelLogin(loginForm:FormGroup){
    this.isLoading=true;
  
    if(loginForm.valid){
  this._LoginService.loginApi(loginForm.value).subscribe
  ({
    next:(response)=>{
      if(response.message==='success')
      {
        localStorage.setItem('userToken', response.token);
        this._LoginService.decodeUserData();
        this.isLoading=false;
        this._Router.navigate(['/mainhome'])
      }
    },
    // console.log(response),
    error:(err)=>{
     
       this.isLoading=false;
       this.apiError=err.error.errors.msg
      console.log(err)
    }
    
    
  
  })
  
      
    }
   }
  
}
