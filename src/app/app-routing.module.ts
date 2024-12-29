// import { SecSliderComponent } from './sec-slider/sec-slider.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { MainhomeComponent } from './mainhome/mainhome.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { authGuard } from './auth.guard';


// import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent },
  {path: 'mainhome', component:MainhomeComponent },
  {path: 'produtsDetails/:id/mainhome', component:MainhomeComponent },
{path:'signup',component:SignupComponent},
  {path: 'search/mainhome', component: MainhomeComponent },
  {path: 'home/signup', component:SignupComponent},
  {path: 'produtsDetails/:id', component:ProductsDetailsComponent},
  {path:'login',component:LoginComponent},
  {path: 'footer', component: FooterComponent },
  {path: 'search', component:SearchComponent},
{path:'home/login',component:LoginComponent},
{path:'checkout',component:CheckoutComponent},

{path:'cart',component:CartComponent,canActivate:[authGuard]},

  
  // {path:'register',component:RegisterComponent},
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
