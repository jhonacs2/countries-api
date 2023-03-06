import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { first, Observable, shareReplay } from 'rxjs';
import { CountryDataResponse } from '../../interfaces/country-data-response.interface';

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.scss']
})
export class AllCountriesComponent implements OnInit {

  public allCountries: CountryDataResponse[];
  public lazyLoadCountries: CountryDataResponse[];

  constructor( private _countriesService: CountriesService ) {
    this.lazyLoadCountries = [];
    this.allCountries = [];
  }

  ngOnInit(): void {
    this._countriesService.getAllCountries().pipe(first()).subscribe(value => {
      this.allCountries = value;
      this.spliceCountries(0, 12);
    });
  }

  private spliceCountries( start: number = 0, end: number = 4 ) {
    this.lazyLoadCountries = this.lazyLoadCountries.concat(this.allCountries.splice(start, end));
  }

  public onScroll() {
    this.spliceCountries();
  }
}
