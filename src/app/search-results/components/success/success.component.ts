import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {

  constructor(private router: Router) {
    setTimeout(() => {
      this.router.navigate(['/home'], { queryParams: { hasTicket: true } });
    }, 3000);
  }

  ngOnInit() {
  }

}
