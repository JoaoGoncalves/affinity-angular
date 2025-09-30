import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  isAuth$ = new BehaviorSubject(false);

  login(credentials: {email : string, password: string}){
    this.isAuth$.next(true);
    console.log(`LOGIN: ${credentials.email} / ${credentials.password}`);
  }

  logout(){
    this.isAuth$.next(false);
    console.log('Logout feito');
  }
  
}
