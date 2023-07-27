import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable, pipe, map } from 'rxjs';
import { CefaSnap } from '../models/cefa-snap-model';

@Component({
  selector: 'app-new-cefa-snap',
  templateUrl: './new-cefa-snap.component.html',
  styleUrls: ['./new-cefa-snap.component.scss']
})
export class NewCefaSnapComponent implements OnInit {
  snapForm!: FormGroup;
  cefaSnapPreview$!: Observable<CefaSnap>

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.snapForm = this.formBuilder.group({
      title: [null],
      description: [null],
      imageUrl: [null],
      location: [null]
    });

    // valueChanges is an oservable which emit the object formGroup each time that a value change
    this.cefaSnapPreview$ = this.snapForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue, // ... Operateur Spread
        createdDate: new Date(),
        snaps: 0,
        id: 0
      })
    ));
  }

  onSubmitForm(): void {
    console.log(this.snapForm.value);
  }
}
