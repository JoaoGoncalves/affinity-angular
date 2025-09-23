import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './shared/interceptor/auth-interceptor';
import { TruncateLimit } from './shared/directives/truncate';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    /* importProvidersFrom(HttpClientModule) */
    provideHttpClient(
      withInterceptors([authInterceptor])
    ),
    {provide: TruncateLimit, useValue: 150 }
  ]
};
