import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class NotificationService {
    constructor(private httpClient: HttpClient) { }
    url: String = 'https://pkpservice.herokuapp.com/';
    getMessages(user: string): Observable<any> {
        return this.httpClient.get(`${this.url}/getMessage`, {
            params: { 'userId': `${user}` }
        });
    }

    sendMessage(user: string, password: string): Observable<any> {
        return this.httpClient.post(`${this.url}/sendMessage`, {
            params: { 'userId': `${user}` }
        });
    }
}