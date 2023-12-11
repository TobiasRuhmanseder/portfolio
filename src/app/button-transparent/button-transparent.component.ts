import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-transparent',
  templateUrl: './button-transparent.component.html',
  styleUrls: ['./button-transparent.component.scss']
})
export class ButtonTransparentComponent {
  @Input() href!: string;
}
