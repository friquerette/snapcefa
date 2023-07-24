import { Component, OnInit } from '@angular/core';
import { Observable, filter, interval, map, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  interval$!: Observable<String>;

  ngOnInit(): void {
    this.interval$ = interval(250).pipe(
      filter( value => value % 3 === 0 ),
      map( value => value % 2 === 0 ? `I'm ${value} and I'm even (pair)` : `I'm ${value} and I'm odd (impair)`),
      tap( text => this.logger(text))
    );
  };
  
  logger(text: string) {
    console.log(text);
  };

}
    