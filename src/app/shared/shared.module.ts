import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from './services/theme.service';
import { LoadingComponent } from './components/loading/loading.component';


@NgModule({
  declarations: [LoadingComponent],
  imports: [
    CommonModule
  ],
  exports: [LoadingComponent],
  providers: [ThemeService]
})
export class SharedModule {
}
