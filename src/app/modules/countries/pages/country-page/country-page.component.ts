import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map, Subject, switchMap, takeUntil} from 'rxjs';
import {CountriesService} from '../../services/countries.service';
import {CountryDataResponse} from '../../interfaces/country-data-response.interface';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.scss']
})
export class CountryPageComponent implements OnInit, OnDestroy {
  public countryResponse: CountryDataResponse | undefined;
  public arrayLanguages: string;

  private _unsubscribe: Subject<void>;

  constructor(private _meta: Meta,
              private _route: ActivatedRoute,
              private _titleService: Title,
              private _countriesService: CountriesService) {
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
    ).subscribe(countryResponse => {
      this.countryResponse = countryResponse;
      this._convertArrayLanguagesToString(countryResponse);
      this._updateMetaTags();
    });
  }

  private _updateMetaTags(): void {
    const imageUrl = this.countryResponse?.flags.svg || '';
    this._titleService.setTitle(`Details of ${this.countryResponse?.name.nativeName.eng.common}`)
    this._meta.updateTag({
      property: 'og:title',
      content: `Details of ${this.countryResponse?.name.nativeName.eng.common}`
    });
    this._meta.updateTag({property: 'og:image', content: imageUrl});
  }
}
