import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from '../service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  url = `${apiUrl.url}/deltaplc/user`;
  
  ViewUserProfile(Uid:any): Observable<any> {
    return this.http.get(`${this.url}/${Uid}`)
  }

  ViewAllUser(): Observable<any> {
    return this.http.get(`${this.url}`);
  }

  CreateUser(user: any): Observable<any> {
    return this.http.post(`${this.url}/signup`,user);
  }

  UserAsignCompany(Uid:number,Cid:number): Observable<any> {
    return this.http.put(`${this.url}/${Uid}/update/${Cid}`,"");
  }
}
