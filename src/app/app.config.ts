import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withInMemoryScrolling, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      // Smooth page transitions (Angular 17+)
      withViewTransitions(),
      // Scroll to top on every navigation
      withInMemoryScrolling({ scrollPositionRestoration: 'top' }),
    ),
  ],
};
