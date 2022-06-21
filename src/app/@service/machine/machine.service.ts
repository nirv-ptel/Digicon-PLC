import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from '../service';

@Injectable({
  providedIn: 'root'
})
export class MachineService {

  constructor(private http: HttpClient) { }

  url = `${apiUrl.url}/machine/api`;

  CreateMachine(machine:any): Observable<any> {
    return this.http.post(`${this.url}`,machine);
  }

  ViewMachine(): Observable<any> {
    return this.http.get(`${this.url}`);
  }

}
