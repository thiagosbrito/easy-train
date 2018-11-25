import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  hasTicket: boolean;
  constructor(private route: ActivatedRoute) {
    this.hasTicket = false;
    this.route.queryParams.subscribe((params) => {
      if (params.hasTicket) {
        this.hasTicket = params.hasTicket;
      }
    });
   }

  ngOnInit() {
  }

}
