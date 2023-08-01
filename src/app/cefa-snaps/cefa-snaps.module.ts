import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CefaSnapComponent } from './cefa-snap/cefa-snap.component';
import { SingleCefaSnapComponent } from './single-cefa-snap/single-cefa-snap.component';
import { NewCefaSnapComponent } from './new-cefa-snap/new-cefa-snap.component';
import { CefaSnapListComponent } from './cefa-snap-list/cefa-snap-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CefaSnapComponent,
    CefaSnapListComponent,
    NewCefaSnapComponent,
    SingleCefaSnapComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    CefaSnapComponent,
    CefaSnapListComponent,
    NewCefaSnapComponent,
    SingleCefaSnapComponent
  ]
})
export class CefaSnapsModule { }
