import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./portafolio/pages/home-page/home-page.component')
  },
  {
    path: 'projects',
    loadComponent: () => import('./portafolio/pages/projects-page/projects-page.component'),
    children: [
      {
        path: 'home',
        loadComponent: () => import('./portafolio/components/projects/pages/projects-home-page/projects-home-page.component')
      },
      {
        path: 'view/:query',
        loadComponent: () => import('./portafolio/components/projects/pages/view-page/view-page.component')
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
