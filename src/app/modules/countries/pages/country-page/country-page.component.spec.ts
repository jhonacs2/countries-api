import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CountryPageComponent} from './country-page.component';
import {ActivatedRoute, convertToParamMap} from '@angular/router';
import {CountriesService} from '../../services/countries.service';
import {of} from 'rxjs';
import {countriesByName} from '../../../../spec-helpers/countries.spec-helper';
import {RouterTestingModule} from '@angular/router/testing';
import {GetFirstAttrCurrencyObjectPipe} from '../../pipes/get-first-attr-object.pipe';

describe('CountryPageComponent', () => {
  let component: CountryPageComponent;
  let fixture: ComponentFixture<CountryPageComponent>;
  let fakeCounterService: CountriesService;

  beforeEach(async () => {
    fakeCounterService = jasmine.createSpyObj<CountriesService>(
      'CountriesService',
      {
        getCountriesByName: of(countriesByName)
      }
    );


    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        {provide: ActivatedRoute, useValue: {paramMap: of(convertToParamMap({countryName: 'Bolivia'}))}},
        {provide: CountriesService, useValue: fakeCounterService},
      ],
      declarations: [CountryPageComponent, GetFirstAttrCurrencyObjectPipe]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CountryPageComponent);
    component = fixture.componentInstance;
  });

  it('should fetch country details', () => {
    fixture.detectChanges();
    expect(countriesByName[0]).toEqual(component.countryResponse);
  });

  it('should fetch country details and convert array languages to string', () => {
    fixture.detectChanges();
    let languages = Object.values(component.countryResponse!.languages);
    expect(component.arrayLanguages).toContain(languages.toString())
  });
});
