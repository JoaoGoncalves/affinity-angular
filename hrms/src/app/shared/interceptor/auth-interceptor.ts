import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const authService = inject(AuthService);
  const token = authService.getToken();

  const newReq = req.clone({
    setHeaders: {
      'Authorization': `Bearer ${token}`
    }
  })


  return next(newReq);
};
