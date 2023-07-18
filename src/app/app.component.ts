import { Component, OnInit } from '@angular/core';
import { CefaSnap } from './models/cefa-snap-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
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
        imageUrl: 'https://www.okvoyage.com/wp-content/uploads/2020/01/paris-2-810x403.jpg',
        location: 'Paris'
      }
    ]

  }
}
    