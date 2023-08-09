import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCountriesComponent } from './card-countries.component';

xdescribe('CardCountriesComponent', () => {
  let component: CardCountriesComponent;
  let fixture: ComponentFixture<CardCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCountriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
