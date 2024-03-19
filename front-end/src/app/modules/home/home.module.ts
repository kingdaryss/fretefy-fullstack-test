import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { TableModule } from 'src/app/components/table/table.module';
import { ButtonModule } from 'src/app/components/button/button.module';
import { CardModule } from 'src/app/components/card/card.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    CardModule,
    TableModule,
    ButtonModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
