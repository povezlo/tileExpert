import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SocialBarComponent } from './shared/components/social-bar/social-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SocialBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
