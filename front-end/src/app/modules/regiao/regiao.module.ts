import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegiaoComponent } from './regiao.component';
import { RegiaoRoutingModule } from './regiao.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'src/app/components/card/card.module';
import { ButtonModule } from 'src/app/components/button/button.module';
import { InputModule } from 'src/app/components/input/input.module';
import { IconModule } from 'src/app/components/icon/icon.module';
import { TooltipModule } from 'src/app/components/tooltip/tooltip.module';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RegiaoRoutingModule,
    CardModule,
    ButtonModule,
    InputModule,
    IconModule,
    TooltipModule
  ],
  declarations: [RegiaoComponent],
  exports: [RegiaoComponent]
})
export class RegiaoModule { }
