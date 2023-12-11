import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { AboveTheFoldComponent } from './above-the-fold/above-the-fold.component';
import { ButtonBrightComponent } from './button-bright/button-bright.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectComponent } from './project/project.component';
import { ButtonDarkComponent } from './button-dark/button-dark.component';
import { ButtonTransparentComponent } from './button-transparent/button-transparent.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    AboveTheFoldComponent,
    ButtonBrightComponent,
    AboutMeComponent,
    MySkillsComponent,
    PortfolioComponent,
    ProjectComponent,
    ButtonDarkComponent,
    ButtonTransparentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
