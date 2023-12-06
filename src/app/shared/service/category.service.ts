import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'https://murmuring-spire-62571-4282a89100f1.herokuapp.com/api/v2';

  constructor(private http: HttpClient) { }


  getCategory(): Observable<any> {
    return this.http.get<any>(`/category/get-all-categories`);
  }

  getCategoryById(id): Observable<any> {
    return this.http.get<any>(`/category/get-category/${id}`);
  }

  addSubCategory(id, subCategories): Observable<any> {
    return this.http.put<any>(`/category/add-subcategories/${id}`, subCategories);
  }

  createCategory(categoryData): Observable<any> {
    return this.http.post<any>(`/category/create-category`, categoryData);
  }

  deleteCategory(id): Observable<any> {
    return this.http.delete<any>(`/category/delete-category/${id}`);
  }

  updateCategory(id, categoryData): Observable<any> {
    return this.http.put<any>(`/category/update-category/${id}`, categoryData);
  }
  

}
