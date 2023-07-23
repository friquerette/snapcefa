import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    // all which is of format observable (there are many kind) the name the variagble always finished by dollar "$" 
    const interval$ = interval(1000); // 1000 ms or 1 second

    // subscribe to the obsersable which receiv a callback (here print the value emit par the observable)
    interval$.subscribe(value => console.log(1, value));
    // here the oversable do nothing until someone subscribe to it, here 3 seconde later
    setTimeout(() => interval$.subscribe(value => console.log(2, value)), 3000);
  }
}
    