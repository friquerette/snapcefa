import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Observable, tap } from 'rxjs';
import { CefaSnap } from 'src/app/core/models/cefa-snap-model';
import { CefaSnapsService } from 'src/app/core/services/cefa-snaps.service';

@Component({
  selector: 'app-single-cefa-snap',
  templateUrl: './single-cefa-snap.component.html',
  styleUrls: ['./single-cefa-snap.component.scss']
})
export class SingleCefaSnapComponent implements OnInit {

  cefaSnap$!: Observable<CefaSnap>;
  addSnap!: boolean;
  buttonText!: string;

  constructor(private cefaSnapsService : CefaSnapsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.addSnap = true;
    this.buttonText = 'Oh Snap!';
    const cefaSnapId = +this.route.snapshot.params['id'];
    this.cefaSnap$ = this.cefaSnapsService.getFaceSnapById(cefaSnapId);
  }
  
  onAddSnap(cefaSnapId: number) {
    // snapCefaSnapById() update the attribut "addSnap" (the counter) annd return an Obversable with the refresh object 
    this.cefaSnap$ = this.cefaSnapsService.snapCefaSnapById(cefaSnapId, this.addSnap ? 'snap' : 'unsnap' ).pipe(
      // tap() the side effect allow to do the following action when the Obersable emit (finis his action)
      tap(() => {
        this.buttonText = this.addSnap ? 'Oups Unsnap!' : 'Oh Snap!';
        this.addSnap = !this.addSnap;
      })
    );
  };

}
