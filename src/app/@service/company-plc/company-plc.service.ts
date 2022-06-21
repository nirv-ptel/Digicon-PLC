import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from '../service';

@Injectable({
  providedIn: 'root'
})
export class CompanyPlcService {

  constructor(private http: HttpClient) { }

  url = `${apiUrl.url}/companyPlc/api`;

  CreateCompanyPlc(companyPlc:any): Observable<any> {
    return this.http.post(`${this.url}`,companyPlc);
  }

  ViewCompanyPlc(): Observable<any> {
    return this.http.get(`${this.url}`);
  }
}
