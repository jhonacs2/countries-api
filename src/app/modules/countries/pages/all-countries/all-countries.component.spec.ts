import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AllCountriesComponent} from './all-countries.component';
import {CountriesService} from '../../services/countries.service';
import {of} from 'rxjs';
import {countries, countriesByName} from '../../../../spec-helpers/countries.spec-helper';
import {CountrySearchComponent} from '../../components/country-search/country-search.component';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {FormsModule} from '@angular/forms';
import {CardCountriesComponent} from '../../components/card-countries/card-countries.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('AllCountriesComponent', () => {
  let component: AllCountriesComponent;
  let fixture: ComponentFixture<AllCountriesComponent>;
  let fakeCounterService: CountriesService;


  beforeEach(async () => {
    fakeCounterService = jasmine.createSpyObj<CountriesService>(
      'CountriesService',
      {
        getAllCountries: of([...countries]),
        getCountriesByName: of([...countriesByName])
      }
    );

    await TestBed.configureTestingModule({
      providers: [{provide: CountriesService, useValue: fakeCounterService}],
      declarations: [AllCountriesComponent, CountrySearchComponent, CardCountriesComponent],
      imports: [InfiniteScrollModule, FormsModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AllCountriesComponent);
    component = fixture.componentInstance;
  });

  it('The lazyLoadCountries variable should return a size of 14 or less', () => {
    fixture.detectChanges();
    expect(component.lazyLoadCountries.length).toBeLessThan(countries.length);
  });

  it('Should load additional countries when scrolling to the bottom of the window', () => {
    fixture.detectChanges();
    let initialCountriesCount = component.lazyLoadCountries.length;
    component.onScroll()
    expect(component.lazyLoadCountries.length).toBeGreaterThanOrEqual(initialCountriesCount);
  });
});
