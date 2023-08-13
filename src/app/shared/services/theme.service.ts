import {Inject, Injectable} from '@angular/core';
import {ThemeMode} from '../../interfaces/ThemeMode.enum';
import {BehaviorSubject, Observable} from 'rxjs';
import {DOCUMENT} from '@angular/common';

@Injectable()
export class ThemeService {
  private _themeChanged$: Observable<ThemeMode>;
  private _currentMode: ThemeMode;
  private _themeChangedSubject: BehaviorSubject<ThemeMode>;

  constructor(@Inject(DOCUMENT) private _document: Document) {
    this._currentMode = ThemeMode.LIGHT;
    this._themeChangedSubject = new BehaviorSubject<ThemeMode>(this._currentMode);
    this._themeChanged$ = this._themeChangedSubject.asObservable();
    this._init();
  }

  get themeChanged$(): Observable<ThemeMode> {
    return this._themeChanged$;
  }

  public updateTheme() {
    this._document.body.classList.toggle(ThemeMode.LIGHT);
    this._document.body.classList.toggle(ThemeMode.DARK);
    if (this._currentMode === ThemeMode.LIGHT) {
      this._currentMode = ThemeMode.DARK;
      this._updateLocalStore();
      this._themeChangedSubject.next(this._currentMode);
    } else {
      this._currentMode = ThemeMode.LIGHT;
      this._themeChangedSubject.next(this._currentMode);
      this._updateLocalStore();
    }
  }

  private _init(): void {
    const themeLocalStorage = this._getThemeLocalStore();
    this._currentMode = themeLocalStorage as ThemeMode;
    this._themeChangedSubject.next(themeLocalStorage as ThemeMode);
    this._document.body.classList.add(this._currentMode);
  }

  private _updateLocalStore(): void {
    localStorage.setItem('ca-theme', this._currentMode);
  }

  private _getThemeLocalStore(): string {
    return localStorage.getItem('ca-theme') || ThemeMode.LIGHT;
  }
}
