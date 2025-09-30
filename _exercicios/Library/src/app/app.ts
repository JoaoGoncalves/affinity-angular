import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Auth } from './services/auth';
import { AsyncPipe, NgIf } from '@angular/common';
import { isAuth } from './shared/functions/is-auth';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, NgIf, AsyncPipe],
templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  router = inject(Router);
  authService = inject(Auth);

  isAuth$ = isAuth();

  login() {
    this.router.navigate(['/login']);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
