import { Component } from '@angular/core';
@Component({
  selector: 'app-card-header',
  template: `<div class='app-card-header'><ng-content></ng-content></div>`,
  styleUrls: ['./card.component.scss']
})
export class CardHeaderComponent {}
@Component({
  selector: 'app-card-content',
  template: `<div class='app-card-content'><ng-content></ng-content></div>`,
  styleUrls: ['./card.component.scss']
})
export class CardContentComponent {}
@Component({
  selector: 'app-card-footer',
  template: `<div class='app-card-footer'><ng-content></ng-content></div>`,
  styleUrls: ['./card.component.scss']
})
export class CardFooterComponent {}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {}
