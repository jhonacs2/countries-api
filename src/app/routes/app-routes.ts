import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: 'countries',
    loadChildren: () => import('../modules/countries/countries.module').then(m => m.CountriesModule)
  },
  {

  },
  {
    path: '', redirectTo: 'countries', pathMatch: 'full'
  }
];
