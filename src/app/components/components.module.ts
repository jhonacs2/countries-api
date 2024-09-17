import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainNavComponent} from './main-nav/main-nav.component';


@NgModule({
  declarations: [
    MainNavComponent
  ],
  exports: [
    MainNavComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule {
}
