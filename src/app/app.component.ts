import { Component, OnInit } from '@angular/core';
import { Observable, delay, filter, interval, map, mergeMap, concatMap, exhaustMap, switchMap, of, take, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  interval$!: Observable<String>;
  redTrainsCalled = 0;
  yellowTrainsCalled = 0;

  ngOnInit(): void {
    // __________________________
    // * operator of low level *
    // pipe: filter/map/tap
    // this.startLowLevel();

    // __________________________
    // * operator of high level *
    // mergeMap/concatMap/exhaustMap/switchMap
    // this.startHighLevel()
  };

  // ______________________________________________________________
  //                  operator of high level
  //             mergeMap/concatMap/exhaustMap/switchMap
  // ______________________________________________________________
  startHighLevel() {
    interval(500).pipe(
      take(10),
      map(value => value % 2 === 0 ? 'rouge' : 'jaune'),
      tap(color => console.log(`La lumière s'allume en %c${color}`, `color: ${this.translateColor(color)}`)),
      
      mergeMap(color => this.getTrainObservable$(color)),
      // concatMap(color => this.getTrainObservable$(color)),
      // exhaustMap(color => this.getTrainObservable$(color)),
      // switchMap(color => this.getTrainObservable$(color)),

      tap(train => console.log(`Train %c${train.color} ${train.trainIndex} arrivé !`, `font-weight: bold; color: ${this.translateColor(train.color)}`))
    ).subscribe();
  };

  getTrainObservable$(color: 'rouge' | 'jaune') {
    const isRedTrain = color === 'rouge';
    isRedTrain ? this.redTrainsCalled++ : this.yellowTrainsCalled++;
    const trainIndex = isRedTrain ? this.redTrainsCalled : this.yellowTrainsCalled;
    console.log(`Train %c${color} ${trainIndex} appelé !`, `text-decoration: underline; color: ${this.translateColor(color)}`);
    return of({ color, trainIndex }).pipe(
      delay(isRedTrain ? 2000 : 4000)
    );
  };

  translateColor(color: 'rouge' | 'jaune') {
    return color === 'rouge' ? 'red' : 'yellow';
  };

  // ______________________________________________________________
  //                   operator of low level
  //                    pipe: filter/map/tap
  // ______________________________________________________________
  startLowLevel() {
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
    