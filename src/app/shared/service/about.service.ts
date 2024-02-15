import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  private apiUrl = 'https://mesesoft-backend-2ccb39a272e8.herokuapp.com/api/v2';

  constructor(private http: HttpClient) { }

  createAbout(aboutData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/about/create-about`, aboutData);
  }

  getAbout(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/about/get-all-abouts`);
  }
}
