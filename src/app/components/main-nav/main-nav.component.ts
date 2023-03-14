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
    // if (this.checkBoxDarkMode.nativeElement.checked) {
    document.body.classList.toggle('dark-theme');
    // } else {
    //
    // }
    // console.log(this.checkBoxDarkMode.nativeElement.checked, 'checkout');
    // document.body.classList.toggle('dark-theme');
  }
}
