import { Component, OnInit } from '@angular/core';
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

  }

  ngAfterViewInit() {
    setTimeout(
      () => {
        AOS.refresh();
      }, 500)
  }
}

