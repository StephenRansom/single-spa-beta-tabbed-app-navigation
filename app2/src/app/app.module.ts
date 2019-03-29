import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Subroute1Component } from './subroute1/subroute1.component';
import { HomeComponent } from './home/home.component';
import {MenubarModule} from 'primeng/menubar';
import { AppRoutingModule } from './app-routing.module';
import { Subroute2Component } from './subroute2/subroute2.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Subroute1Component,
    Subroute2Component
  ],
  imports: [
    BrowserModule,
    MenubarModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
