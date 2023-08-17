import {Component, OnDestroy, OnInit} from '@angular/core';
import {CountriesService} from '../../services/countries.service';
import {first, Subject, takeUntil} from 'rxjs';
import {CountryDataResponse} from '../../interfaces/country-data-response.interface';

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.scss']
})
export class AllCountriesComponent implements OnInit, OnDestroy {
  public lazyLoadCountries: CountryDataResponse[];

  private _allCountries: CountryDataResponse[];
  private _start: number;
  private _end: number;
  private _unsubscribe: Subject<void>;

  constructor(private _countriesService: CountriesService) {
    this.lazyLoadCountries = [];
    this._allCountries = [];
    this._start = 0;
    this._end = 0;
    this._unsubscribe = new Subject<void>();
  }

  ngOnInit(): void {
    this._initialize();
  }

  ngOnDestroy(): void {
    this._unsubscribe.next();
    this._unsubscribe.complete();
  }

  public onScroll(): void {
    this._start += 4;
    this._end += 2;
    this._spliceCountries();
  }

  public countryFilter(textCountry: string): void {
    this.lazyLoadCountries = [];
    this._countriesService.getCountriesByName(textCountry)
      .pipe(first())
      .subscribe(value => {
        this._allCountries = value;
        this.lazyLoadCountries = this.lazyLoadCountries.concat(this._allCountries.splice(0, 8));
      });
  }

  public regionFilter(value: string): void {
    this.lazyLoadCountries = [];
    this._countriesService.getCountriesByRegion(value)
      .pipe(first())
      .subscribe(value => {
        this._allCountries = value;
        this.lazyLoadCountries = this.lazyLoadCountries.concat(this._allCountries.splice(0, 8));
      });
  }

  private _spliceCountries(): void {
    this.lazyLoadCountries = this.lazyLoadCountries.concat(this._allCountries.splice(this._start, this._end));
  }

  private _initialize(): void {
    this._getAllCountries();
  }

  private _getAllCountries(): void {
    this._countriesService.getAllCountries()
      .pipe(takeUntil(this._unsubscribe))
      .subscribe(value => {
        this._allCountries = value;
        this.lazyLoadCountries = this.lazyLoadCountries.concat(this._allCountries.splice(0, 14));
      });
  }
}
