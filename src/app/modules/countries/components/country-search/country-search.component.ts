import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-country-search',
  templateUrl: './country-search.component.html',
  styleUrls: ['./country-search.component.scss']
})
export class CountrySearchComponent {
  @Output() public countryInput: EventEmitter<string>;
  @Output() public regionSelector: EventEmitter<string>;

  public countryText: string;

  constructor() {
    this.countryInput = new EventEmitter<string>();
    this.regionSelector = new EventEmitter<string>();
    this.countryText = '';
  }

  public countryFilter(): void {
    this.countryInput.emit(this.countryText);
  }

  public clickFilter(filterSelector: HTMLSelectElement): void {
    this.regionSelector.emit(filterSelector.value);
  }
}
