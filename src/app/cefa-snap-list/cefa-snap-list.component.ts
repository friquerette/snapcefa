import { Component, OnInit } from '@angular/core';
import { CefaSnap } from '../models/cefa-snap-model';
import { CefaSnapsService } from '../services/cefa-snaps.service';
import { interval, take, tap } from 'rxjs';

@Component({
  selector: 'app-cefa-snap-list',
  templateUrl: './cefa-snap-list.component.html',
  styleUrls: ['./cefa-snap-list.component.scss']
})
export class CefaSnapListComponent implements OnInit {
  cefaSnaps!: CefaSnap[];

  constructor(private cefaSnapsService: CefaSnapsService) { }

  ngOnInit(): void {
    this.cefaSnaps = this.cefaSnapsService.getAllCefaSnaps();
    this.startForTake();

  }

  startForTake() {
    interval(1000).pipe(
      // complete (end the subscription) when the number of ask emit is reach 
      take(5),
      // tap(value => console.log(value)),
      tap(console.log) // same previoue
    ).subscribe();
  }
}
