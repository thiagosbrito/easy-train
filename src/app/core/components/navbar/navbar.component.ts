import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  displayMenu: boolean;
  constructor(private route: ActivatedRoute) {
    route.url.subscribe(url => {
      console.log(url);
    });
   }

  ngOnInit() {
    this.displayMenu = false;
  }

  showMenu() {
    this.displayMenu = true;
  }

  hideMenu() {
    this.displayMenu = false;
  }

}
