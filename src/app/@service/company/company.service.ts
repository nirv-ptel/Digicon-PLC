import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from '../service';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }

  url = `${apiUrl.url}/company/api`;

  CreateCompany(company:any): Observable<any> {
    return this.http.post(`${this.url}`,company);
  }

  ViewCompany(): Observable<any> {
    return this.http.get(`${this.url}`);
  }
}
