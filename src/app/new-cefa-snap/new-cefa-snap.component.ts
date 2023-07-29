import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, pipe, map } from 'rxjs';
import { Router } from '@angular/router';
import { CefaSnap } from '../models/cefa-snap-model';
import { CefaSnapsService } from '../services/cefa-snaps.service';

@Component({
  selector: 'app-new-cefa-snap',
  templateUrl: './new-cefa-snap.component.html',
  styleUrls: ['./new-cefa-snap.component.scss']
})
export class NewCefaSnapComponent implements OnInit {
  snapForm!: FormGroup;
  cefaSnapPreview$!: Observable<CefaSnap>;
  urlRegex!: RegExp;

  constructor(private formBuilder: FormBuilder,
    private cefaSnapsService: CefaSnapsService,
    private router: Router) { }

  ngOnInit(): void {
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.snapForm = this.formBuilder.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
      imageUrl: [null, [Validators.required, Validators.pattern(this.urlRegex)]],
      location: [null]
    }, {
      // The event is emit from the observable only when the user leaves a form attribut with updateOn=blur
      updateOn: 'blur'
    });

    // valueChanges is an oservable which emit the object formGroup each time that a value change 
    // here the cefaSnapPreview$ will emit object of type  
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
    // console.log(this.snapForm.value);
    this.cefaSnapsService.addCefaSnap(this.snapForm.value);
    this.router.navigateByUrl('cefasnaps');
  };

}
