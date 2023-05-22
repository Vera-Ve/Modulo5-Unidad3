import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FakestoreService {
  private url = 'https://fakestoreapi.com';
  constructor(private http: HttpClient) {}
  getCategories() {
    return this.http.get(this.url + '/products/categories' );
  }
  
    getItems(category: string) {
      return this.http.get(this.url + '/products/category/' + category)
    }
  }

