import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoginService {
  constructor(private httpClient: HttpClient) { }
  url: String = 'https://pkpservice.herokuapp.com/';

  authenticate(user: String, password: String): Observable<any> {
    let authenticated = this.httpClient.post(`${this.url}login`, `${password}`);
    return authenticated;
  }
}