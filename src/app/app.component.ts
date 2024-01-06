import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import AOS from 'aos';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';


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

