import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductdisplayComponent } from './productdisplay/productdisplay.component';
import { MycartComponent } from './mycart/mycart.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { ThanksPageComponent } from './thanks-page/thanks-page.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [ 
  {path:'',component: SignupComponent},
  {path:'mycart',component: MycartComponent},
  {path:'productdisplay',component: ProductdisplayComponent},
  {path:'mycart/checkout-page',component: CheckoutPageComponent },
  {path:'mycart/checkout-page/thanks-page',component: ThanksPageComponent},
  {path:'thanks-page',component: ThanksPageComponent},
  {path:'checkout-page',component: CheckoutPageComponent },
  {path:'login',component:LoginComponent },
  {path:'logout',component:LogoutComponent },
  {path:'signup',component:SignupComponent },
  {path:'**',component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [ProductdisplayComponent,MycartComponent,CheckoutPageComponent,ThanksPageComponent,LoginComponent,LogoutComponent,SignupComponent]