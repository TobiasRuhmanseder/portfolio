import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {


  ngOnInit(): void {
    this.checkWindowLocationHref(); // Check if 'www' is in the URL because of the fetch indication on cotact form
  }



  checkWindowLocationHref() {
    if (window.location.href == 'https://portfolio.tobias-ruhmanseder.com/') {
      window.location.href = 'https://www.portfolio.tobias-ruhmanseder.com/';
    }
  }
}
