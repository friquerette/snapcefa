import { Component, OnInit, Input } from '@angular/core';
import { CefaSnap } from '../models/cefa-snap-model';

@Component({
  selector: 'app-cefa-snap',
  templateUrl: './cefa-snap.component.html',
  styleUrls: ['./cefa-snap.component.scss']
})
export class CefaSnapComponent implements OnInit {
  @Input() cefaSnap!: CefaSnap;

  addSnap!: boolean;
  buttonText!: string;

  ngOnInit() {
    this.addSnap = true;
    this.buttonText = 'Oh Snap!';
  }
  
  onAddSnap() {
    this.cefaSnap.snaps = this.addSnap ? this.cefaSnap.snaps+1 : this.cefaSnap.snaps-1;
    this.buttonText = this.addSnap ? 'Oups Unsnap!' : 'Oh Snap!';
    this.addSnap = !this.addSnap;
  }
}
