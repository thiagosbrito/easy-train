import { Component, OnInit } from '@angular/core';
import { FindTicketsService } from '../../../home/services/find-tickets.service';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss']
})
export class ResultItemComponent implements OnInit {
  ticketDetail: any;
  constructor(private ticketService: FindTicketsService) {
  }

  ngOnInit() {
    this.getDetail();
  }

  getDetail() {
    this.ticketService.getDetails('dasdas', 'dasdas').subscribe(res => {
      this.ticketDetail = res;
    });
  }

}
