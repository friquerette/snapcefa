import { Component, OnInit } from '@angular/core';
import { CefaSnap } from './models/cefa-snap-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySnap!: CefaSnap;
  mySnap2!: CefaSnap;

  ngOnInit(): void {this.mySnap = new CefaSnap('The Face', 'description of one face', new Date(), 6, 
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Chiltern_bears_Chesham_Museum.jpg/440px-Chiltern_bears_Chesham_Museum.jpg'
  );
  this.mySnap2 = new CefaSnap('The Face V2', 'description of one face', new Date(), 5, 
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTBR79kQFmwlwitL9ur707Ino4D4RkH_DiyvOjUhGh&shiltern_bears_Chesham_Museum.jpg'
);
  }
}
    