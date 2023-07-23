import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CefaSnap } from '../models/cefa-snap-model';
import { CefaSnapsService } from '../services/cefa-snaps.service';

@Component({
  selector: 'app-single-cefa-snap',
  templateUrl: './single-cefa-snap.component.html',
  styleUrls: ['./single-cefa-snap.component.scss']
})
export class SingleCefaSnapComponent implements OnInit {
  cefaSnap!: CefaSnap;

  addSnap!: boolean;
  buttonText!: string;

  constructor(private cefaSnapsService : CefaSnapsService, private route: ActivatedRoute) {
    
  }

  ngOnInit() {
    this.addSnap = true;
    this.buttonText = 'Oh Snap!';
    const cefaSnapId = +this.route.snapshot.params['id'];
    this.cefaSnap = this.cefaSnapsService.getFaceSnapById(cefaSnapId);
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
