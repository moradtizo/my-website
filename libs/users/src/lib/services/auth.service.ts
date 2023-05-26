import { AuthResponse } from './../../../models/authResponse';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly authUrl ="http://localhost:5000/users"
  constructor(private http :HttpClient) { }
  login(email :string, password :string):Observable<AuthResponse>{
    return this.http.post<AuthResponse>(`${this.authUrl}/login`,{ email, password})
  }

}
