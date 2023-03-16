import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent implements OnInit {
  @ViewChild('checkboxDarkMode') public checkBoxDarkMode!: ElementRef<HTMLInputElement>;

  ngOnInit(): void {

  }

  public changeTheme(): void {
    // document.body.classList.toggle('light');
    // document.body.classList.toggle('dark');
  }
}
