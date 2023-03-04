import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { COUNTRIES_ROUTES } from './countries-routes';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( COUNTRIES_ROUTES )
  ],
  exports: [
    RouterModule
  ]
})
export class CountriesRoutingModule {
}
