import { Inject, Injectable } from '@angular/core';
import { ThemeMode } from '../../interfaces/ThemeMode.enum';
import { BehaviorSubject, Observable } from 'rxjs';
import { DOCUMENT } from '@angular/common';

@Injectable()
export class ThemeService {

  public themeChanged$: Observable<ThemeMode>;

  private _currentMode: ThemeMode;
  private _themeChangedSubject: BehaviorSubject<ThemeMode>;

  constructor( @Inject(DOCUMENT) private _document: Document ) {
    this._currentMode = ThemeMode.LIGHT;
    this._themeChangedSubject = new BehaviorSubject<ThemeMode>(this._currentMode);
    this.themeChanged$ = this._themeChangedSubject.asObservable();
    this._init();
  }

  private _init(): void {
    const deviceMode = window.matchMedia('(prefers-color-scheme: dark)');
    console.log(deviceMode);
    // deviceMode.matches ? (initMode = Mode.DARK) : (initMode = Mode.LIGHT);
    // this.updateCurrentMode(initMode);
    this._document.body.classList.add(this._currentMode);
  }
}