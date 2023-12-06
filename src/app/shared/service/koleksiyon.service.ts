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
    return this.http.get<any>(`/koleksiyon/koleksiyons`);
  }

  createKoleksiyon(koleksiyonData): Observable<any> {
    return this.http.post<any>(`/koleksiyon/create-koleksiyon`, koleksiyonData);
  }

  getCollectionById(id): Observable<any> {
    return this.http.get<any>(`/koleksiyon/koleksiyons/${id}`);
  }

  updateKoleksiyon(id, formData): Observable<any> {
    return this.http.put<any>(`/koleksiyon/koleksiyons/${id}`, formData);
  }

  // deleteCategory(id): Observable<any> {
  //   return this.http.delete<any>(`/category/delete-category/${id}`);
  // }
  

}
