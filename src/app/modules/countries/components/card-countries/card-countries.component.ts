import { Component, Input } from '@angular/core';
import { CountryDataResponse } from '../../interfaces/country-data-response.interface';

@Component({
  selector: 'app-card-countries',
  templateUrl: './card-countries.component.html',
  styleUrls: ['./card-countries.component.scss']
})
export class CardCountriesComponent {

  @Input() country!: CountryDataResponse ;

}
