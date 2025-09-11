import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { EmployeeService } from '../services/employee-service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, NgIf],
  providers: [AuthService],
  template: `
    <div class="login-container">
      <h1>Login</h1>
      <form>
        <input type="text" name="email" placeholder="Email" [(ngModel)]="credentials.email" />
        <input
          type="password"
          name="password"
          placeholder="Password"
          [(ngModel)]="credentials.password"
        />
        <button type="submit" (click)="submit()">Login</button>
      </form>
      <span class="warning" *ngIf="!credentials.email || !credentials.password">
        Please fill in all the required fields
      </span>
      <!-- @if (!credentials.email || !credentials.password) {
      <span class="warning"> Please fill in all the required fields </span>
      } -->
    </div>
  `,
  styles: ``,
})
export class Login {
  credentials = { email: '', password: '' };

  constructor(private authService: AuthService, /* private employeeService: EmployeeService */){}

  submit(){
    if(this.credentials.email && this.credentials.password){

      console.log('Email:', this.credentials.email);
      console.log('Password:', this.credentials.password);

      this.authService.login(this.credentials).subscribe();
    }
  }
}
