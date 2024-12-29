import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModelService } from '../model.service';
import { LoginService } from '../login.service';
import { CartService } from '../cart.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupService } from '../signup.service';
import * as bootstrap from 'bootstrap';  // Import Bootstrap
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isLogin: boolean = false;
  cartNum: number = 0;
  showMe: boolean = false; // Toggle for login/register forms
  passType: string = 'password';
  showPass: boolean = false;
  isLoading: boolean = false;
  apiError: string = '';


  @ViewChild('modalElement') modalElement!: ElementRef;

  // Login Form
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{5,20}$/)]),
  });

  // Signup Form
  signupForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{5,20}$/)]),
    rePassword: new FormControl(null, [Validators.required]),
  });

  constructor(
    private _ModelService: ModelService,
    private _LoginService: LoginService,
    private _SignupService:SignupService,
    private _Router: Router,
    private _CartService: CartService
  ) {
    _CartService.numberOfCartItems.subscribe({
      next: (x) => {
        this.cartNum = x;
      },
      error: (err) => console.log(err)
    });

    _LoginService.userData.subscribe({
      next: () => {
        this.isLogin = _LoginService.userData.getValue() !== null;
        
      }
    });
  }

  // Toggle between login and register forms
  toogleTag(): void {
    this.showMe = !this.showMe;
  }

  // Toggle password visibility
  togglePassword(): void {
    this.showPass = !this.showPass;
    this.passType = this.showPass ? 'text' : 'password';
  }

  // Handle login form submission
  handelLogin(loginForm: FormGroup): void {
    this.isLoading = true;

    if (loginForm.valid) {
      this._LoginService.loginApi(loginForm.value).subscribe({
        next: (response) => {
          if (response.message === 'success') {
            localStorage.setItem('userToken', response.token);
            this._LoginService.decodeUserData();
            this.isLoading = false;
            this._Router.navigate(['/mainhome']);  // Navigate to main home

          
           
          }
        },
        error: (err) => {
          this.isLoading = false;
          this.apiError = err.error.errors.msg;  // Handle API errors
          console.log(err);
        }
      });
    }
  }

  // Handle sign-up form submission
  handelSignUp(signupForm: FormGroup): void {
    this.isLoading = true;

    if (signupForm.valid) {
      this._SignupService.signupApi(signupForm.value).subscribe({
        next: (response) => {
          if (response.message === 'success') {
            console.log(response);
            this.isLoading = false;
            this._Router.navigate(['/login']);
          }
        },
        error: (err) => {
          this.isLoading = false;
          this.apiError = err.error.errors.msg;
          console.log(err);
        }
      });
    }
  }

  // Show the modal and trigger register form display
  toggleModal(): void {
    this._ModelService.showRegisterForm();
  }

  // Log out the user
  logOut(): void {
    this._LoginService.logOut();
  }
}

