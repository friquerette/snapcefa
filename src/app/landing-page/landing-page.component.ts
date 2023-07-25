import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  userEmail: string = 'test@gmail.com';

constructor(private router: Router) { }
  onContinue(): void {
      this.router.navigateByUrl('cefasnaps');
  };

  onSubmitForm(form: NgForm): void {
    console.log(form.value);
  };
}
