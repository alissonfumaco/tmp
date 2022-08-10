import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DfCardComponent } from './df-card/df-card.component';



@NgModule({
  declarations: [
    DfCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DfCardComponent
  ]
})
export class CardModule { }
