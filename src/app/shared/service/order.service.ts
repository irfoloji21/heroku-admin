import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'https://mesesoft-backend-2ccb39a272e8.herokuapp.com/api/v2'; 

  constructor(private http: HttpClient) { }


  getShopOrders(id): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/order/get-seller-all-orders/${id}`);
  }

  updateOrderStatus(id, status): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put<any>(`${this.apiUrl}/order/update-order-status/${id}`, status);
  }


 
}
