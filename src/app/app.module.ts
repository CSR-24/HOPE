import { FirebaseModule } from './firebase/firebase.module';
import { SignupComponent } from './auth/signup/signup.component';
import { MaterialModule } from './app-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './sidenav/toolbar/toolbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CartComponent } from './cart/cart.component';
import { CategoryPanelComponent } from './category-panel/category-panel.component';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './sidenav/toolbar/search/search.component';
import { FormsModule } from '@angular/forms';
import { BlogComponent } from './blog/blog.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ToolbarComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    CartComponent,
    CategoryPanelComponent,
    SearchComponent,
    BlogComponent,
    MyOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    CommonModule,
    FormsModule,
    FirebaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
