# Snapcefa
The purpose of this second is to discover:\
   . the observable with reactive programming,\
   . the use of form,\
   . communicate with the backend with the HTTP query,\
   . discovered the architecture with the use of module, the lazy loading and the guards.\
\
Part 1: The observable\
There are several technicals to handle asynchrone in javascript:\
   . callbacks : function call when a event appear\
   . promise with then() and catch()\
   . function async/await, function which wait until the event appear\
Angular provide a tool more powerful to handle it with the tools RxJS with its Observables\

lesson 1\
   a) use of interval() (an observable import from rxjs) and subscribe with the method subscribe()\
   b) declare the interval$ as observable which emit number and display the result into the template
      use the pipe Async which subscribe to the obsersable and dont format the data.
      Avoid to use the method subscribe() which is prohibated\