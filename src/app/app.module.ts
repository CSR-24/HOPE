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

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ToolbarComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    CartComponent,
    CategoryPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
