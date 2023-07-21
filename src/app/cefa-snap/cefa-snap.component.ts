import { Component, OnInit, Input } from '@angular/core';
import { CefaSnap } from '../models/cefa-snap-model';
import { CefaSnapsService } from '../services/cefa-snaps.service';

@Component({
  selector: 'app-cefa-snap',
  templateUrl: './cefa-snap.component.html',
  styleUrls: ['./cefa-snap.component.scss']
})
export class CefaSnapComponent implements OnInit {
  @Input() cefaSnap!: CefaSnap;

  addSnap!: boolean;
  buttonText!: string;

  constructor(private cefaSnapsService : CefaSnapsService) {
    
  }

  ngOnInit() {
    this.addSnap = true;
    this.buttonText = 'Oh Snap!';
  }
  
  onAddSnap() {
    if  (this.addSnap) {
      this.cefaSnapsService.snapCefaById(this.cefaSnap.id, 'snap');
    } else {
      this.cefaSnapsService.snapCefaById(this.cefaSnap.id, 'unsnap');
    }
    this.buttonText = this.addSnap ? 'Oups Unsnap!' : 'Oh Snap!';
    this.addSnap = !this.addSnap;
  }
}
