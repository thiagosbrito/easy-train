import { Component, OnInit } from '@angular/core';
import { FindTicketsService } from '../../../home/services/find-tickets.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  ticketsList: any;
  constructor(private ticketsService: FindTicketsService) {
    this.getTickets();
  }

  ngOnInit() {
  }

  getTickets() {
    this.ticketsService.getTickets().subscribe(res => {
      this.ticketsList = res;
    });
  }

}
