import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountryDataResponse } from '../interfaces/country-data-response.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private readonly BASE_URL = 'https://restcountries.com/v3.1';

  constructor( private _httpClient: HttpClient ) { }

  public getAllCountries(): Observable<CountryDataResponse[]> {
    return this._httpClient.get<CountryDataResponse[]>(`${ this.BASE_URL }/all`);
  }

  public getCountriesByName( countryName: string ): Observable<CountryDataResponse[]> {
    return this._httpClient.get<CountryDataResponse[]>(`${ this.BASE_URL }/name/${ countryName }`);
  }

  public getCountriesByRegion( region: string ): Observable<CountryDataResponse[]> {
    return this._httpClient.get<CountryDataResponse[]>(`${ this.BASE_URL }/region/${ region }`);
  }
}
