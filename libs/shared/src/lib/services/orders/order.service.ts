import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order, ResOrder } from '../../models/order';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  apiUrlC = 'https://restcountries.com/v2';
  apiUrl = 'http://localhost:5000/orders'

  constructor(private http: HttpClient) { }

  getAllOrders(): Observable<ResOrder>{
      return this.http.get<ResOrder>(this.apiUrl)
  }
  postOrder(formData:FormData):Observable<Order>{
    return this.http.post<Order>('http://localhost:5000/orders',formData);
  }
  putStatus(id: number | undefined, data: Order) {
    return this.http.put<Order>(`${this.apiUrl}/${id}`,data);
  }
  deleteOrder(id:string| undefined ){
    return this.http.delete(`${this.apiUrl}/${id}`)
  }
  getCountries() {
    return this.http.get(`${this.apiUrlC}/all`);
  }
  getCities(countryCode: string) {
    return this.http.get(`${this.apiUrlC}/alpha/${countryCode}?fields=capital`);
  }
}
