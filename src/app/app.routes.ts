import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { AboutPage } from './pages/about-page/about-page';
import { RecipesPage } from './pages/recipes-page/recipes-page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
    title: 'Healthy Recipe Finder',
  },
  {
    path: 'about',
    component: AboutPage,
    title: 'About — Healthy Recipe Finder',
  },
  {
    path: 'recipes',
    component: RecipesPage,
    title: 'Recipes — Healthy Recipe Finder',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
