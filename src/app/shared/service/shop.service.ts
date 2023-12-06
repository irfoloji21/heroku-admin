import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  private apiUrl = 'https://murmuring-spire-62571-4282a89100f1.herokuapp.com/api/v2';

  constructor(private http: HttpClient) { }

  
  updateShop(formData): Observable<any> {
    return this.http.put<any>(`/shop/update-seller-info`, formData);
  }
}
