import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
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
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { ButtonSubmitComponent } from './button-submit/button-submit.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { GoToTheTopComponent } from './go-to-the-top/go-to-the-top.component';
import { FooterComponent } from './footer/footer.component';
import { ImprintComponent } from './imprint/imprint.component';
import { MainWebsiteComponent } from './main-website/main-website.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';

import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { MySkillsBackendComponent } from './my-skills-backend/my-skills-backend.component';
import { MySoftskillsComponent } from './my-softskills/my-softskills.component';
// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
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
    ContactComponent,
    ButtonSubmitComponent,
    GoToTheTopComponent,
    FooterComponent,
    ImprintComponent,
    MainWebsiteComponent,
    DataProtectionComponent,
    MobileMenuComponent,
    MySkillsBackendComponent,
    MySoftskillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'de',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
