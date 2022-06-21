import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from '../service';

@Injectable({
  providedIn: 'root'
})
export class CustomerPlcService {

  constructor(private http: HttpClient) { }

  url = `${apiUrl.url}/customerPlc/api`;

  CreateCutomerPlc(cutomerPlc:any): Observable<any> {
    return this.http.post(`${this.url}`,cutomerPlc);
  }

  ViewCustomerPlc(): Observable<any> {
    return this.http.get(`${this.url}`);
  }
}
