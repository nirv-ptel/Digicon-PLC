import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from '../service';

@Injectable({
  providedIn: 'root'
})
export class RegisterPlcService {

  constructor(private http: HttpClient) { }

  url = `${apiUrl.url}/registerPlc/api`;

  CreateRegisterPlc(registerPlc:any): Observable<any> {
    return this.http.post(`${this.url}`,registerPlc);
  }

  ViewRegisterPlc(): Observable<any> {
    return this.http.get(`${this.url}`);
  }
}
