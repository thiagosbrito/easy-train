import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { TicketSearchComponent } from './components/ticket-search/ticket-search.component';
import { HomeNewsComponent } from './components/home-news/home-news.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    BsDatepickerModule.forRoot()
  ],
  declarations: [HomeComponent, CarouselComponent, TicketSearchComponent, HomeNewsComponent]
})
export class HomeModule { }
