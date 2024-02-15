import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  private apiUrl = 'https://mesesoft-backend-2ccb39a272e8.herokuapp.com/api/v2';

  constructor(private http: HttpClient) { }

  
  updateShop(formData): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/shop/update-seller-info`, formData);
  }
}
