import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainRoutingModule } from './train-routing.module';
import { WagonComponent } from './wagon/wagon.component';

@NgModule({
  declarations: [WagonComponent],
  imports: [
    CommonModule,
    TrainRoutingModule
  ]
})
export class TrainModule { }
