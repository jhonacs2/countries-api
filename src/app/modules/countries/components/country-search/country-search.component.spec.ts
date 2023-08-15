import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CountrySearchComponent} from './country-search.component';
import {findEl, makeKeyboardEvent} from '../../../../spec-helpers/element.spec-helper';
import {FormsModule} from '@angular/forms';
import {first} from 'rxjs';

describe('CountrySearchComponent', () => {
  let component: CountrySearchComponent;
  let fixture: ComponentFixture<CountrySearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [CountrySearchComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CountrySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('emit countryInputEvent when enter key is pressed', () => {
    let actualInputText = '';

    component.countryInput.pipe(first()).subscribe(value => {
      actualInputText = value;
    });

    const searchInput: HTMLInputElement = findEl(fixture, '#ca-search').nativeElement;
    searchInput.value = 'Bolivia';
    searchInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    searchInput.dispatchEvent(makeKeyboardEvent('keyup', {
      bubbles: true, cancelable: true, shiftKey: false, key: 'enter'
    }));
    fixture.detectChanges();

    expect(actualInputText).toEqual(actualInputText);
  });

  it('emit regionSelectorEvent when select region', () => {
    let selectorText = '';

    component.regionSelector.pipe(first()).subscribe(value => {
      selectorText = value;
    });

    const searchInput: HTMLSelectElement = findEl(fixture, '#filterByRegion').nativeElement;
    searchInput.value = searchInput.options[1].value;
    searchInput.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    expect(selectorText).toEqual(searchInput.options[1].value);
  });
});
