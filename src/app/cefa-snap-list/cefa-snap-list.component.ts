import { Component, OnInit } from '@angular/core';
import { CefaSnap } from '../models/cefa-snap-model';
import { CefaSnapsService } from '../services/cefa-snaps.service';

@Component({
  selector: 'app-cefa-snap-list',
  templateUrl: './cefa-snap-list.component.html',
  styleUrls: ['./cefa-snap-list.component.scss']
})
export class CefaSnapListComponent implements OnInit {
  cefaSnaps!: CefaSnap[];

  constructor(private cefaSnapsService: CefaSnapsService) { }

  ngOnInit(): void {
    this.cefaSnaps = this.cefaSnapsService.cefaSnaps;
  }
}
