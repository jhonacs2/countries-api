import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { MainComponent } from './modules/main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
