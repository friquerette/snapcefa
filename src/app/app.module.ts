import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CefaSnapComponent } from './cefa-snap/cefa-snap.component';
import { CefaSnapListComponent } from './cefa-snap-list/cefa-snap-list.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleCefaSnapComponent } from './single-cefa-snap/single-cefa-snap.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewCefaSnapComponent } from './new-cefa-snap/new-cefa-snap.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    CefaSnapComponent,
    CefaSnapListComponent,
    SingleCefaSnapComponent,
    LandingPageComponent,
    NewCefaSnapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
