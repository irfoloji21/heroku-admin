import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KoleksiyonService {
  private apiUrl = 'https://murmuring-spire-62571-4282a89100f1.herokuapp.com/api/v2';

  constructor(private http: HttpClient) { }


  getKoleksiyon(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/koleksiyon/koleksiyons`);
  }

  createKoleksiyon(koleksiyonData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/koleksiyon/create-koleksiyon`, koleksiyonData);
  }

  getCollectionById(id): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/koleksiyon/koleksiyons/${id}`);
  }

  updateKoleksiyon(id, formData): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/koleksiyon/koleksiyons/${id}`, formData);
  }

  // deleteCategory(id): Observable<any> {
  //   return this.http.delete<any>(`${this.apiUrl}/category/delete-category/${id}`);
  // }
  

}
