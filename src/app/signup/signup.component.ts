
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupService } from '../signup.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private _SignupService:SignupService, private _Router:Router){}
  isLoading:boolean=false;
  apiError:String='';
 signupForm: FormGroup= new FormGroup({
  name: new FormControl(null,[Validators.required, Validators.minLength(3)]),
  email: new FormControl(null,[Validators.required,Validators.email]),
  password: new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{5,20}$/)]),
  rePassword: new FormControl(null,[Validators.required]),
// phone:new FormControl(null)

 })
 handelSignUp(signupForm:FormGroup){
  this.isLoading=true;

  if(signupForm.valid){
this._SignupService.signupApi(signupForm.value).subscribe
({
  next:(response)=>{
    if(response.message==='success'){
      this.isLoading=false;
      this._Router.navigate(['/login'])
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
