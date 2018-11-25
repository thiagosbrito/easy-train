import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'easy-train';
  showNavbar: boolean;
  constructor(private route: ActivatedRoute) {
    this.showNavbar = true;
    console.log(route);
  }
}
