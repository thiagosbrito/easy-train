import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { ResultItemComponent } from './components/result-item/result-item.component';
import { SelectSeatComponent } from './components/select-seat/select-seat.component';
import { SummaryComponent } from './components/summary/summary.component';

const routes: Routes = [
  {
    path: 'results',
    component: SearchResultComponent,
  },
  {
    path: 'result/:id',
    component: ResultItemComponent
  },
  {
    path: 'select-seat/:id',
    component: SelectSeatComponent
  },
  {
    path: 'summary',
    component: SummaryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchResultsRoutingModule { }
