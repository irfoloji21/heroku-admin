import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://murmuring-spire-62571-4282a89100f1.herokuapp.com/api/v2';

  constructor(private http: HttpClient) { }


  getUsers(): Observable<any> {
    return this.http.get<any>(`/user/get-all-users`);
  }

}
