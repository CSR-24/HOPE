import { LoginRegistrationComponent } from './auth/login-registration/login-registration.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { BlogComponent } from './blog/blog.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes:Routes = [
  {path: 'auth/loginRegistration/:tabindex', component: LoginRegistrationComponent},
  {path: 'cart', component: CartComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'myOrders', component: MyOrdersComponent},
  {path: '', component: HomeComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
