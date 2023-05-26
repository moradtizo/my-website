import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiUrlC = 'https://restcountries.com/v2';
  apiUrlLo = 'http://localhost:5000/users/login'
  apiUrlRe = 'http://localhost:5000/users/register'
  apiUrlU ='http://localhost:5000/users'

  constructor(private http: HttpClient) { }

    getAllUser(): Observable<ResUser>{
    return this.http.get<ResUser>(this.apiUrlU)
}
getCountries() {
  return this.http.get(`${this.apiUrlC}/all`);
}
}
