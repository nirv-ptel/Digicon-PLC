import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from '../service';

@Injectable({
  providedIn: 'root'
})
export class MethodPlcService {

  constructor(private http: HttpClient) { }

  url = `${apiUrl.url}/method/api`;

  CreateMethodPlc(methodPlc:any): Observable<any> {
    return this.http.post(`${this.url}`,methodPlc);
  }

  ViewMethodPlc(): Observable<any> {
    return this.http.get(`${this.url}`);
  }
}
