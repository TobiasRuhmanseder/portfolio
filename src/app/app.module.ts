import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { AboveTheFoldComponent } from './above-the-fold/above-the-fold.component';
import { ButtonBrightComponent } from './button-bright/button-bright.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    AboveTheFoldComponent,
    ButtonBrightComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
