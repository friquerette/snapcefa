import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cefa-snap',
  templateUrl: './cefa-snap.component.html',
  styleUrls: ['./cefa-snap.component.scss']
})
export class CefaSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;

  ngOnInit() {
    this.title = 'The Face';
    this.description = 'description of one face';
    this.createdDate = new Date();
    this.snaps = 6;
    this.imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Chiltern_bears_Chesham_Museum.jpg/440px-Chiltern_bears_Chesham_Museum.jpg';
  }
}
