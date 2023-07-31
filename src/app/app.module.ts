import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import * as fr from '@angular/common/locales/fr';

import { AppComponent } from './app.component';
import { CefaSnapComponent } from './cefa-snap/cefa-snap.component';
import { CefaSnapListComponent } from './cefa-snap-list/cefa-snap-list.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleCefaSnapComponent } from './single-cefa-snap/single-cefa-snap.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewCefaSnapComponent } from './new-cefa-snap/new-cefa-snap.component';
import { httpInterceptorProviders } from './interceptors';

@NgModule({
  declarations: [
    AppComponent,
    CefaSnapComponent,
    CefaSnapListComponent,
    SingleCefaSnapComponent,
    HeaderComponent,
    LandingPageComponent,
    NewCefaSnapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr_FR'},
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default)
  }
}
