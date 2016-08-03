import {provideRouter, RouterConfig} from '@angular/router';
import {LoginRoutes} from "./pages/login/login.routes";
import {PagesRoutes} from "./pages/pages.routes";

export const routes:RouterConfig = [
  ...LoginRoutes,
  ...PagesRoutes,
  {
    path: '**',
    redirectTo: '/pages/home'
  },
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
