import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-bright',
  template: `
    <h2>Single-slot content projection</h2>
    <ng-content></ng-content>
  `,
  templateUrl: './button-bright.component.html',
  styleUrls: ['./button-bright.component.scss']
})
export class ButtonBrightComponent {

  @Input() href!: string;
}
