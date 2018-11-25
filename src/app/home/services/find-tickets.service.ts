import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FindTicketsService {
  returnedTickets: any;
  constructor(private http: HttpClient) { }

  searchTickets(from, to) {
    const url = `${environment.baseApi}getTrips?sourceCity=${from}&targetCity=${to}`;
    return this.http.get(url).pipe(
      map(res => {
        this.storeTickets(res)
      })
    );
  }

  storeTickets(result) {
    this.returnedTickets = result;
  }

  getTickets() {
    return of(this.returnedTickets);
  }

  getDetails(from, to) {
    const url = `${environment.baseApi}getStops?from=${from}&to=${to}`;
    return this.http.get(url);
  }
}
