import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../services/auth';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, NgIf],
  template: `
     <section>
      <h1>Login</h1>
      <form>
        <input type="text" name="email" placeholder="email" [(ngModel)]="credentials.email">
        <input type="password" name="password" placeholder="password" [(ngModel)]="credentials.password">
        <button type="submit" (click)="submit()">login</button>
        <p *ngIf="!credentials.email || !credentials.password">
          plaese fill all the fields
        </p>
      </form>
    </section>
  `,
  styles: ``
})
export class Login {
  router = inject(Router);
  authService = inject(Auth)
  credentials = {email: '', password: ''}

  submit(){
    if(this.credentials.email && this.credentials.password){
      this.authService.login(this.credentials);
      this.router.navigate(['/books/list']);
    }
  }
}
