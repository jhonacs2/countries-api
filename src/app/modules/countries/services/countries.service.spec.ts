import {TestBed} from '@angular/core/testing';

import {CountriesService} from './countries.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {CountryDataResponse} from '../interfaces/country-data-response.interface';
import {countries, countriesByName, countriesByRegion} from '../../../spec-helpers/countries.spec-helper';

describe('CountriesService', () => {
  const BASE_URL = 'https://restcountries.com/v3.1';
  let countriesService: CountriesService;
  let controller: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CountriesService]
    });
    countriesService = TestBed.inject(CountriesService);
    controller = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(countriesService).toBeTruthy();
  });

  it('get all countries', () => {
    let actualCountries: CountryDataResponse[] = [];
    countriesService.getAllCountries().subscribe(countries => actualCountries = countries);
    controller.expectOne(`${BASE_URL}/all`).flush(countries);

    expect(actualCountries).toEqual(countries);
  });

  it('get all countries', () => {
    let actualCountries: CountryDataResponse[] = [];
    countriesService.getAllCountries().subscribe(countries => actualCountries = countries);
    controller.expectOne(`${BASE_URL}/all`).flush(countries);

    expect(actualCountries).toEqual(countries);
  });

  it('get countries by name', () => {
    const countryName = 'bo';
    let actualCountries: CountryDataResponse[] = [];
    countriesService.getCountriesByName(countryName).subscribe(countries => actualCountries = countries);
    controller.expectOne(`${BASE_URL}/name/${countryName}`).flush(countriesByName);

    expect(actualCountries).toEqual(countriesByName);
  });

  it('get countries by region', () => {
    const region = 'america';
    let actualCountries: CountryDataResponse[] = [];
    countriesService.getCountriesByRegion(region).subscribe(countries => actualCountries = countries);
    controller.expectOne(`${BASE_URL}/region/${region}`).flush(countriesByRegion);

    expect(actualCountries).toEqual(countriesByRegion);
  });
});
