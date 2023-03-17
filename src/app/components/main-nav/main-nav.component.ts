import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ThemeService } from '../../shared/services/theme.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent implements OnInit {
  @ViewChild('checkboxDarkMode') public checkBoxDarkMode!: ElementRef<HTMLInputElement>;


  constructor( private _themeService: ThemeService ) {
  }

  ngOnInit(): void {

  }

  public changeTheme(): void {
    this._themeService.updateTheme();
    // document.body.classList.toggle('light');
    // document.body.classList.toggle('dark');
  }
}
