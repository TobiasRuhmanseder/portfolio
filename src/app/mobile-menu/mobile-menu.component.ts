import { Component, Input } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-mobile-menu',
  //standalone: false,
  //imports: [],
  templateUrl: './mobile-menu.component.html',
  styleUrl: './mobile-menu.component.scss'
})
export class MobileMenuComponent {

  @Input() language: string = 'de';
  @Input() menuOpen: boolean = false;


  constructor(public translate: TranslateService) {

  }

  openMenu() {
    if (!this.menuOpen) window.scroll(0, 0);
    if (this.menuOpen) this.closeMenu()
    else {
      this.menuOpen = !this.menuOpen;
      document.body.style.overflowY = 'hidden';
    }
  }

  closeMenu() {
    this.menuOpen = !this.menuOpen;
    document.body.style.overflowY = 'unset';
  }
}