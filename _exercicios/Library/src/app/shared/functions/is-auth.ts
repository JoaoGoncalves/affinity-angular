import { inject } from "@angular/core";
import { Auth } from "../../services/auth";

export function isAuth () {
  const authService = inject(Auth);
  return authService.isAuth$.asObservable();
}
