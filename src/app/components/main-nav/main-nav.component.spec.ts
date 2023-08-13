import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MainNavComponent} from './main-nav.component';
import {ThemeService} from '../../shared/services/theme.service';
import {ThemeMode} from '../../interfaces/ThemeMode.enum';
import {of} from 'rxjs';

describe('MainNavComponent', () => {
  let component: MainNavComponent;
  let fakeThemeService: ThemeService;
  let fixture: ComponentFixture<MainNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainNavComponent],
      providers: [ThemeService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MainNavComponent);
    component = fixture.componentInstance;
    fakeThemeService = TestBed.inject(ThemeService);
  });

  it('should set dark theme to false if no theme is present in local storage', () => {
    fixture.detectChanges();
    expect(component.darkTheme).toBeFalsy();
  });

  it('should set dark theme to true if theme is present in local storage', () => {
    const spy = spyOnProperty(fakeThemeService, 'themeChanged$', 'get').and.returnValue(of(ThemeMode.DARK));
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
    expect(component.darkTheme).toBeTruthy();
  });
});
