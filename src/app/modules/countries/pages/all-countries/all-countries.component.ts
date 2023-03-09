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
    this._countriesService.getAllCountries().pipe(first()).subscribe(value => {
      this.allCountries = value;
      console.log(value);
      this.spliceCountries(0, 8);
    });
  }

  private spliceCountries( start: number, end: number ): void {
    this._start += start;
    this._end += end;
    this.lazyLoadCountries = this.allCountries.slice(this._start, this._end);
  }

  public onScroll(): void {
    this.spliceCountries(4, 12);
  }
}
