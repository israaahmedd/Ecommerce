import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';

import { MainsliderComponent } from './mainslider/mainslider.component';
import{HttpClientModule}from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { SearchPipe } from './search.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { MainhomeComponent } from './mainhome/mainhome.component';
import { SecSliderComponent } from './sec-slider/sec-slider.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { CartComponent } from './cart/cart.component';
import { ToasteComponent } from './toaste/toaste.component';
import { ToastrModule } from 'ngx-toastr';
import { CheckoutComponent } from './checkout/checkout.component';

// import { RegisterComponent } from './register/register.component'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    NotfoundComponent,
    MainsliderComponent,
    SearchComponent,
    SearchPipe,
    SignupComponent,
    LoginComponent,
    MainhomeComponent,
    SecSliderComponent,
    ProductsDetailsComponent,
    CartComponent,
    ToasteComponent,
    CheckoutComponent,
 
    // RegisterComponent
  ],
  imports: [
   
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule ,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass: 'custom-toast-position', // Use your custom class
      toastClass: 'custom-toast', // Use your custom CSS class

    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
