import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { TicketSearchComponent } from './components/ticket-search/ticket-search.component';
import { HomeNewsComponent } from './components/home-news/home-news.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FindTicketsService } from './services/find-tickets.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    BsDatepickerModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [HomeComponent, CarouselComponent, TicketSearchComponent, HomeNewsComponent],
  exports: [
    CarouselComponent
  ],
  providers: [
    FindTicketsService
  ]
})
export class HomeModule { }
