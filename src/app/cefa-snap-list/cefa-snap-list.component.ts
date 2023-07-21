import { Component, OnInit } from '@angular/core';
import { CefaSnap } from '../models/cefa-snap-model';

@Component({
  selector: 'app-cefa-snap-list',
  templateUrl: './cefa-snap-list.component.html',
  styleUrls: ['./cefa-snap-list.component.scss']
})
export class CefaSnapListComponent implements OnInit {
  cefaSnaps!: CefaSnap[];


  ngOnInit(): void {
    this.cefaSnaps = [
      {
        title: 'The Face V1',
        description: 'description of one face',
        createdDate: new Date(),
        snaps: 255, 
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Chiltern_bears_Chesham_Museum.jpg/440px-Chiltern_bears_Chesham_Museum.jpg'
      },
      {
        title: 'The Face Kitchen',
        description: 'description of one face kitchen',
        createdDate: new Date(),
        snaps: 140, 
        imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/hbx080122kitchens-carenrideau-004-preview-1658766179.jpg?crop=0.840xw:0.931xh;0,0&resize=1200:*',
        location: 'kitchen'
      },
      {
        title: 'The Face Paris',
        description: 'description of one face panam',
        createdDate: new Date(),
        snaps: 27, 
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Paris_by_night_%283438983077%29.jpg/1024px-Paris_by_night_%283438983077%29.jpg',
        location: 'Paris'
      }
    ];
  }
}
