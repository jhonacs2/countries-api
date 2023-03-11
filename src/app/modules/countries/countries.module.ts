import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainViewCountriesComponent } from './pages/main-view-countries/main-view-countries.component';
import { CountriesRoutingModule } from './routes/countries-routing.module';
import { AllCountriesComponent } from './pages/all-countries/all-countries.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { ComponentsModule } from '../../components/components.module';
import { CardCountriesComponent } from './components/card-countries/card-countries.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CountrySearchComponent } from './components/country-search/country-search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MainViewCountriesComponent, AllCountriesComponent, CountryPageComponent, CardCountriesComponent, CountrySearchComponent],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    ComponentsModule,
    InfiniteScrollModule,
    FormsModule
  ]
})
export class CountriesModule {
}
