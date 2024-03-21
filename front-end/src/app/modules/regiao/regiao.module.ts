import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegiaoComponent } from './regiao.component';
import { RegiaoRoutingModule } from './regiao.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'src/app/components/card/card.module';
import { ButtonModule } from 'src/app/components/button/button.module';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RegiaoRoutingModule,
    CardModule,
    ButtonModule
  ],
  declarations: [RegiaoComponent],
  exports: [RegiaoComponent]
})
export class RegiaoModule { }
