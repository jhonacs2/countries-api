import {TestBed} from '@angular/core/testing';

import {ThemeService} from './theme.service';
import {first} from 'rxjs';
import {ThemeMode} from '../../interfaces/ThemeMode.enum';

describe('ThemeService', () => {
  let themeService: ThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThemeService]
    });
    themeService = TestBed.inject(ThemeService);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('initial theme should be light', () => {
    let actualTheme: string = '';
    themeService.themeChanged$.pipe(first()).subscribe(theme => {
      actualTheme = theme;
    });

    expect(actualTheme).toEqual(ThemeMode.LIGHT);
  });

  it('update theme should be dark when update', () => {
    let actualTheme: string = '';
    themeService.updateTheme();

    themeService.themeChanged$.pipe(first()).subscribe(theme => {
      actualTheme = theme;
    });

    expect(actualTheme).toEqual(ThemeMode.DARK);
  });

  describe('local-storage is dark', () => {
    beforeAll(() => {
      localStorage.setItem('ca-theme', ThemeMode.DARK);
    });

    afterEach(() => {
      localStorage.setItem('ca-theme', ThemeMode.DARK);
    });

    it('initial theme should be dark', () => {
      let actualTheme = '';

      themeService.themeChanged$.pipe(first()).subscribe(theme => {
        actualTheme = theme;
      });

      expect(actualTheme).toEqual(ThemeMode.DARK);
    });
  });
});
