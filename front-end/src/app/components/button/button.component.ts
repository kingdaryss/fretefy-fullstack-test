import { Component, Input } from '@angular/core';
// import { calcularContraste } from 'src/app/shared/utils/utils'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() color: 'primary' | 'success' | 'warning' | 'danger' | null | 'transparent' = 'transparent';
  constructor() {
    // this.style['color'] = calcularContraste(this.color);
  }
}
