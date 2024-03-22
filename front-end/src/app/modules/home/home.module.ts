import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { TableModule } from 'src/app/components/table/table.module';
import { ButtonModule } from 'src/app/components/button/button.module';
import { CardModule } from 'src/app/components/card/card.module';
import { TooltipModule } from 'src/app/components/tooltip/tooltip.module';
import { IconModule } from 'src/app/components/icon/icon.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    CardModule,
    TableModule,
    ButtonModule,
    TooltipModule,
    IconModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
