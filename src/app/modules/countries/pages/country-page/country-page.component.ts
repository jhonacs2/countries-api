import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { CountriesService } from '../../services/countries.service';
import { CountryDataResponse } from '../../interfaces/country-data-response.interface';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.scss']
})
export class CountryPageComponent implements OnInit {

  public countryResponse: CountryDataResponse | undefined;


  constructor( private _route: ActivatedRoute,
               private _countriesService: CountriesService ) {
    this.countryResponse = undefined;
  }

  ngOnInit(): void {
    this._route.paramMap.pipe(
      switchMap(params => {
        const countryName = String(params.get('countryName'));
        return this._countriesService.getCountriesByName(countryName);
      }),
      map(value => value[0])
    ).subscribe(response => this.countryResponse = response);
  }
}
