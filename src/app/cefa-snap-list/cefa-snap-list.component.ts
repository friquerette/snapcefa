import { Component, OnInit, OnDestroy } from '@angular/core';
import { CefaSnap } from '../core/models/cefa-snap-model';
import { CefaSnapsService } from '../core/services/cefa-snaps.service';
import { Observable, Subject, interval, take, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-cefa-snap-list',
  templateUrl: './cefa-snap-list.component.html',
  styleUrls: ['./cefa-snap-list.component.scss']
})
export class CefaSnapListComponent implements OnInit, OnDestroy {
  
  cefaSnaps!: CefaSnap[];
  // cefaSnaps$ with a $ because contains an Observ able
  cefaSnaps$!: Observable<CefaSnap[]>;

  private destroy$!: Subject<boolean>; 

  constructor(private cefaSnapsService: CefaSnapsService) { }

  ngOnInit(): void {
    this.cefaSnaps$ = this.cefaSnapsService.getAllCefaSnaps();

    // Terminate the Observable with take()
    // this.startForTake();

    // Pattern Destroy Subject: Terminate the Observable with takeUntil()
    this.startForTakeUntil();
  };

  startForTakeUntil() {
    this.destroy$ = new Subject<boolean>(); // a Subject
    interval(1000).pipe(
      takeUntil(this.destroy$),
      tap(value => console.log(value))
    ).subscribe();
  };

  ngOnDestroy(): void {
    // when the component is destroy, terminate the Observable
    this.destroy$.next(true);
  };

  startForTake() {
    // complete (end the subscription) when the number of ask emit is reach 
    interval(1000).pipe(
      take(5),
      tap(console.log)
    ).subscribe();
  };
}
