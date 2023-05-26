import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product, ResOneProduct, ResProduct } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = 'http://localhost:5000/products'

  constructor(private http: HttpClient) { }

  getAllProduct(): Observable<ResProduct>{
    return this.http.get<ResProduct>(this.apiUrl)
}
getProduct(id:string):Observable<ResOneProduct> {
  return this.http.get<ResOneProduct>(`${this.apiUrl}/${id}`)
}
deleteProduct(id:string| undefined ){
  return this.http.delete(`${this.apiUrl}/${id}`)
}
postProduct(formData:FormData):Observable<Product>{
  return this.http.post<Product>(this.apiUrl,formData);
}

updateProduct(id: string, formData: FormData): Observable<ResOneProduct> {
  return this.http.put<ResOneProduct>(`${this.apiUrl}/${id}`,formData)
}
}
