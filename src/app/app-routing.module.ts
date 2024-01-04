import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainWebsiteComponent } from './main-website/main-website.component';
import { ImprintComponent } from './imprint/imprint.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';

const routes: Routes = [
  { path: '', component: MainWebsiteComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'data-protection', component: DataProtectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 140] // [x, y]
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
