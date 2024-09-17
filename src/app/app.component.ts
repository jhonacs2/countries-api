import {Component} from '@angular/core';
import {ThemeService} from './shared/services/theme.service';
import {Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'api-countries';

  constructor(private _themeService: ThemeService,
              private _meta: Meta) {
    this._meta.updateTag({property: 'og:image', content: 'https://flagcdn.com/gd.svg'});
    this._meta.addTag({property: 'og:image', content: 'https://flagcdn.com/gd.svg'});
  }
}
