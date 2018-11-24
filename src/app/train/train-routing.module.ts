import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WagonComponent } from './wagon/wagon.component';

const routes: Routes = [
  {
    path: 'train',
    component: WagonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainRoutingModule { }
