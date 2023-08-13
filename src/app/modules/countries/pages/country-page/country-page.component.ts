import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {map, Subject, switchMap, takeUntil} from 'rxjs';
import {CountriesService} from '../../services/countries.service';
import {CountryDataResponse} from '../../interfaces/country-data-response.interface';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.scss']
})
export class CountryPageComponent implements OnInit, OnDestroy {
  public countryResponse: CountryDataResponse | undefined;
  public arrayLanguages: string;

  private _unsubscribe: Subject<void>;

  constructor(private _route: ActivatedRoute,
              private _countriesService: CountriesService,
              private _router: Router) {
    this.countryResponse = undefined;
    this.arrayLanguages = '';
    this._unsubscribe = new Subject<void>();
  }

  ngOnInit(): void {
    this._initialize();
  }

  ngOnDestroy(): void {
    this._unsubscribe.next();
    this._unsubscribe.complete();
  }

  private _convertArrayLanguagesToString(response: CountryDataResponse): void {
    const objectEntriesArray = Object.entries(response.languages).map(language => language[1]);
    this.arrayLanguages = objectEntriesArray.join(',');
  }

  private _initialize(): void {
    this._route.paramMap.pipe(
      takeUntil(this._unsubscribe),
      switchMap(params => {
        const countryName = String(params.get('countryName'));
        return this._countriesService.getCountriesByName(countryName);
      }),
      map(value => value[0])
    ).subscribe(response => {
      this.countryResponse = response;
      this._convertArrayLanguagesToString(response);
    });
  }
}
