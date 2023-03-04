import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainViewCountriesComponent } from './main-view-countries.component';

describe('MainViewCountriesComponent', () => {
  let component: MainViewCountriesComponent;
  let fixture: ComponentFixture<MainViewCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainViewCountriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainViewCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
