


import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModelService } from '../model.service';
import { ProductsService } from './../products.service';
import { Component, OnInit, Renderer2, ElementRef, ViewChild, } from '@angular/core';

import { Router } from '@angular/router';
import { fakeAsync } from '@angular/core/testing';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
showMe:boolean=false;
hideMe:boolean=true;


  @ViewChild('modalElement') modalElement!: ElementRef;
  @ViewChild('loginRegisterLink') loginRegisterLink!: ElementRef; // Add this line
  isModalVisible: boolean = false;
  overFlow:boolean=false;
  products: any[] = []; 
   

  constructor(private _ProductsService: ProductsService,
    private _ModelService: ModelService,
    private _ElementRef: ElementRef,

    private _Router:Router) {}


  

  
   

   




  ngOnInit(): void {
   
    this._ModelService.isModalVisible$.subscribe((isVisible) => {
      this.isModalVisible = isVisible; }),
      this._ModelService.showRegisterForm$.subscribe(show => {
        if (show) {
          this.showMe = true;
          this._ModelService.toggleModal();
          this._ModelService.resetRegisterForm(); // Add this line to reset the show state
        }
      });
  

      // this.extractedProducts = this.products.filter(product => this.desiredIds.includes(product.id));


    this._ProductsService.getProducts().subscribe({
      next: (response) => this.products = response.data.slice(0,4)

    })
   
    
    
  };
 
  


  

  



   
  
}

 
// hideAndShow(){
//  const showRegister= document.getElementById('showRegister');
//    register= document.getElementById('register');
 

//   register.addEventListener("click", function () {
//     // Remove "d-none" and add "d-flex" classes
//     showRegister.classList.remove("d-none");
//     showRegister.classList.add("d-flex");
//   });
// }




