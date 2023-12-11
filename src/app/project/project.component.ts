import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input() project: any;
  @Input() otherDirection: boolean = false;
  @Input() aosSide: string = 'fade-left';


  ngOnInit() {
    if (this.project.otherDirection) this.aosSide = 'fade-right';
  }
}
