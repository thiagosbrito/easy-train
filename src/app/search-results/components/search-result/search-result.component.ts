import { Component, OnInit } from '@angular/core';
import { FindTicketsService } from '../../../home/services/find-tickets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  ticketsList: any;
  constructor(private ticketsService: FindTicketsService, private router: Router) {
    this.getTickets();
  }

  ngOnInit() {
  }

  getTickets() {
    this.ticketsService.getTickets().subscribe(res => {
      this.ticketsList = res;
    });
  }

  selectTicket() {
    this.router.navigate(['/result/1']);
  }

}
