import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from '../service';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  constructor(private http: HttpClient) { }

  url = `${apiUrl.url}/json`;

  ViewJson(): Observable<any> {
    return this.http.get(`${this.url}/read`)
  }

}
