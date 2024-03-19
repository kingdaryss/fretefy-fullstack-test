import { Component } from '@angular/core';
@Component({
  selector: 'app-card-header',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./card.component.scss']
})
export class CardHeaderComponent {}
@Component({
  selector: 'app-card-content',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./card.component.scss']
})
export class CardContentComponent {}
@Component({
  selector: 'app-card-footer',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./card.component.scss']
})
export class CardFooterComponent {}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {}
