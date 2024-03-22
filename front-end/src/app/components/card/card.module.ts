import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent, CardContentComponent, CardFooterComponent, CardHeaderComponent } from './card.component';

@NgModule({
  declarations: [CardComponent, CardHeaderComponent, CardContentComponent, CardFooterComponent],
  imports: [CommonModule],
  exports: [CardComponent, CardHeaderComponent, CardContentComponent, CardFooterComponent]
})
export class CardModule { }
