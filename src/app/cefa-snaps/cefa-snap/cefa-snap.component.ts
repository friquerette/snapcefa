import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CefaSnap } from 'src/app/core/models/cefa-snap-model';
import { CefaSnapsService } from 'src/app/core/services/cefa-snaps.service';

@Component({
  selector: 'app-cefa-snap',
  templateUrl: './cefa-snap.component.html',
  styleUrls: ['./cefa-snap.component.scss']
})
export class CefaSnapComponent implements OnInit {
  @Input() cefaSnap!: CefaSnap;

  addSnap!: boolean;
  buttonText!: string;

  constructor(private router: Router, private cefaSnapsService : CefaSnapsService) {
    
  };

  ngOnInit() {
    this.addSnap = true;
    this.buttonText = 'Oh Snap!';
  };
  
  onAddSnap() {
    if (this.addSnap) {
      this.cefaSnapsService.snapCefaSnapById(this.cefaSnap.id, 'snap');
    } else {
      this.cefaSnapsService.snapCefaSnapById(this.cefaSnap.id, 'unsnap');
    }
    this.buttonText = this.addSnap ? 'Oups Unsnap!' : 'Oh Snap!';
    this.addSnap = !this.addSnap;
  }

  onDisplayCefa(id: number): void {
    this.router.navigateByUrl(`cefasnaps/${this.cefaSnap.id}`);
  };
}
