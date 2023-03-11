import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { first } from 'rxjs';
import { CountryDataResponse } from '../../interfaces/country-data-response.interface';

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.scss']
})
export class AllCountriesComponent implements OnInit {

  public allCountries: CountryDataResponse[];
  public lazyLoadCountries: CountryDataResponse[];

  private _start: number;
  private _end: number;

  constructor( private _countriesService: CountriesService ) {
    this.lazyLoadCountries = [];
    this.allCountries = [];
    this._start = 0;
    this._end = 0;
  }

  ngOnInit(): void {
    this._countriesService.getAllCountries()
      .pipe(first())
      .subscribe(value => {
        this.allCountries = value;
        this.lazyLoadCountries = this.lazyLoadCountries.concat(this.allCountries.splice(0, 8));
      });
  }

  private spliceCountries(): void {
    this.lazyLoadCountries = this.lazyLoadCountries.concat(this.allCountries.splice(this._start, this._end));
  }

  public onScroll(): void {
    this._start += 2;
    this._end += 1;
    this.spliceCountries();
  }

  public countryFilter( textCountry: string ): void {
    this.lazyLoadCountries = [];
    this._countriesService.getCountriesByName(textCountry)
      .pipe(first())
      .subscribe(value => {
        this.allCountries = value;
        this.lazyLoadCountries = this.lazyLoadCountries.concat(this.allCountries.splice(0, 8));
      });
  }
}
