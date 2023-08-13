import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ThemeService} from '../../shared/services/theme.service';
import {filter, first} from 'rxjs';
import {ThemeMode} from '../../interfaces/ThemeMode.enum';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent implements OnInit {
  @ViewChild('checkboxDarkMode') public checkBoxDarkMode!: ElementRef<HTMLInputElement>;

  public darkTheme: boolean;

  constructor(private _themeService: ThemeService) {
    this.darkTheme = false;
  }

  ngOnInit(): void {
    this._initialize();
  }

  public changeTheme(): void {
    this._themeService.updateTheme();
  }

  private _initialize(): void {
    this._themeService.themeChanged$
      .pipe(first(), filter(value => value === ThemeMode.DARK))
      .subscribe(() => {
        this.darkTheme = true;
      });
  }
}
