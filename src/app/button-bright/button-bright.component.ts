import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-bright',
  templateUrl: './button-bright.component.html',
  styleUrls: ['./button-bright.component.scss']
})
export class ButtonBrightComponent {

  @Input() content!: string;
  @Input() href!: string;
}
