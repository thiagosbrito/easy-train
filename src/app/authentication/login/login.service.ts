import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class LoginService {
  constructor(private httpClient: HttpClient) { }
  

  authenticate(user: String, password: String): Observable<boolean>{

    const url = 'https://pkpservice.herokuapp.com/login';
    this.httpClient.post(url, `${password}`).subscribe(json => console.log(json));

    return of(true);
  }
}