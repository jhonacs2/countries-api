import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { MainComponent } from './modules/main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { ThemeService } from './shared/services/theme.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
