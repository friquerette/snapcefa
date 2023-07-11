import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CefaSnapComponent } from './cefa-snap/cefa-snap.component';

@NgModule({
  declarations: [
    AppComponent,
    CefaSnapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
