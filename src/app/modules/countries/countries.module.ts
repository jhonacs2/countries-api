import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainViewCountriesComponent } from './pages/main-view-countries/main-view-countries.component';
import { CountriesRoutingModule } from './routes/countries-routing.module';
import { AllCountriesComponent } from './pages/all-countries/all-countries.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { ComponentsModule } from '../../components/components.module';
import { CardCountriesComponent } from './components/card-countries/card-countries.component';

@NgModule({
  declarations: [MainViewCountriesComponent, AllCountriesComponent, CountryPageComponent, CardCountriesComponent],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    ComponentsModule
  ]
})
export class CountriesModule {
}
