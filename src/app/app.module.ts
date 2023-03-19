import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { MainComponent } from './modules/main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { ThemeService } from './shared/services/theme.service';
import { LoadingComponent } from './shared/components/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule
  ],
  providers: [ThemeService],
  exports: [
    LoadingComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
