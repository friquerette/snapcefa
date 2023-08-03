import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module' ;
import { CefaSnapsModule } from './cefa-snaps/cefa-snaps.module';
import { LandingPageModule } from './landing-page/landing-page.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    // Don't import here any more, since it is "lazy load" by the routing module
    // CefaSnapsModule,
    LandingPageModule,
    AuthModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
