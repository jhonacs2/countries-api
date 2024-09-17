import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OgComponentComponent } from './og-component.component';

describe('OgComponentComponent', () => {
  let component: OgComponentComponent;
  let fixture: ComponentFixture<OgComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OgComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OgComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
