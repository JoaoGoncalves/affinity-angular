import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable(/* {
  providedIn: 'root'
} */)
export class AuthService {
  constructor(private readonly http: HttpClient){}

  login(credentials: {email: string, password: string}){
    return this.http.post('https://my-json-server.typicode.com/JoaoGoncalves/hrms-api/auth/login', credentials)
  }
}
