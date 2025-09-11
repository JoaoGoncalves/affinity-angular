import { Routes } from '@angular/router';
import { Login } from './pages/login';
import { EmployeeService } from './services/employee-service';

export const routes: Routes = [
  { path: 'login', component: Login },
  {
    path: 'registration',
    /* loadComponent: async () => {
            const m = await import('./pages/registration');
            return m.Registration;
        }, */
    loadComponent: () => import('./pages/registration').then((m) => m.Registration),
  },
  {
    path: 'employees',
    providers: [EmployeeService],
    loadChildren: () => import('./pages/employees/employees-routes').then( m => m.routes)
  }
];