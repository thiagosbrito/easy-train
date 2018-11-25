import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SearchResultsRoutingModule } from './search-results-routing.module';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { ResultItemComponent } from './components/result-item/result-item.component';
import { SelectSeatComponent } from './components/select-seat/select-seat.component';
import { MessageModalComponent } from './components/message-modal/message-modal.component';

@NgModule({
  declarations: [SearchResultComponent, ResultItemComponent, SelectSeatComponent, MessageModalComponent],
  imports: [
    CommonModule,
    SearchResultsRoutingModule,
    ModalModule.forRoot()
  ]
})
export class SearchResultsModule { }
