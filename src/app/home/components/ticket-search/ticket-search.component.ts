import { Component, OnInit } from '@angular/core';
import { FindTicketsService } from '../../services/find-tickets.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import * as koleo from 'koleo';

@Component({
  selector: 'app-ticket-search',
  templateUrl: './ticket-search.component.html',
  styleUrls: ['./ticket-search.component.scss']
})

export class TicketSearchComponent implements OnInit {

  ticketsForm: FormGroup;

  constructor(
    private ticketsService: FindTicketsService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.createForm();
    // koleo.station().then(
    //   (station) => {
    //     console.log(station);
    //   }
    // ).catch((error) => {
    //   console.log(error);
    // });
  }

  createForm() {
    this.ticketsForm = this.formBuilder.group({
      from: ['', Validators.required],
      to: ['', Validators.required]
    });
  }

  getTickets() {
    const from = this.ticketsForm.get('from').value;
    const to = this.ticketsForm.get('to').value;
    this.ticketsService.searchTickets(from, to).subscribe(res => {
      this.router.navigate(['/results']);
    });
  }
  ngOnInit() {
  }

}
