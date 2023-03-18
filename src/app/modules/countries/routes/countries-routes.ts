import { Routes } from '@angular/router';
import { MainViewCountriesComponent } from '../pages/main-view-countries/main-view-countries.component';
import { AllCountriesComponent } from '../pages/all-countries/all-countries.component';
import { CountryPageComponent } from '../pages/country-page/country-page.component';

export const COUNTRIES_ROUTES: Routes = [
  {
    path: '',
    component: MainViewCountriesComponent,
    children: [
      {
        path: 'all',
        component: AllCountriesComponent
      },
      {
        path: 'country/:countryName',
        component: CountryPageComponent
      },
      {
        path: '',
        redirectTo: 'all',
        pathMatch: 'full'
      }
    ]
  }
];
