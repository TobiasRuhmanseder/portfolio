import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core/dist/lib/translate.service';
import AOS from 'aos';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  constructor(translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

     // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
}

  ngOnInit() {
    AOS.init({
duration: 650,
offset: 350
    });
    this.checkWindowLocationHref(); // Check if 'www' is in the URL because of the fetch indication on cotact form
  }

  ngAfterViewInit() {
    setTimeout(
      () => {
        AOS.refresh();
      }, 500)
  }

  checkWindowLocationHref() {
    if (window.location.href == 'https://portfolio.tobias-ruhmanseder.com/') {
      window.location.href = 'https://www.portfolio.tobias-ruhmanseder.com/';
    }
  }
}

