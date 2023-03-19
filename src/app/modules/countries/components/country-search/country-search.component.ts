import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-country-search',
  templateUrl: './country-search.component.html',
  styleUrls: ['./country-search.component.scss']
})
export class CountrySearchComponent {
  @ViewChild('filterSelector') public htmlFilterSelector!: ElementRef<HTMLSelectElement>;

  @Output() public countryInput: EventEmitter<string>;

  public countryText: string;

  constructor() {
    this.countryInput = new EventEmitter<string>();
    this.countryText = '';
  }

  public countryFilter(): void {
    this.countryInput.emit(this.countryText);
  }

  clickFilter() {
    console.log('click')
  }
}
