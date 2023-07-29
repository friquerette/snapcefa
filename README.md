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
\
lesson 2\
   a) manipulate the emit value with operator of low level:\
      . pipe() allow to apply the operation on the at an Oberservable,\
      . map() is use to transforme the value,\
      . filter() to filter the emit value,\
      . tap() a side effect to send a value outside without modifying this value.\
\
lesson 3\
   operator of high level on the emit value, allow to subscribe to other Obersvable\
      . mergeMap() for paralleling stream\
      . concatMap() do one stream at once without ending if interrupt before the end\
      . exhaustMap() do a full stream before starting the next one, and ignore the ask when processing\
      . switch() do the last stream asked and interrupted it if there is a new ask\
\
lesson 4\
   Handle memory leak (fuite de mémoire)\
      . subscribe() each time that a obervable is subscribe its life continue when the composant is unload, and a second is load when the component is load a second time\
      . take(x) complete when the number of emit is reach, here x\
      . takeUntil(): pattern Destroy Subject with a subject which is called when the component is unload by OnDestroy\
      . async pipe (in the template html): any Observable subscribe with the pipe async is automatically destroy when the component is unloaded\
\
For rxjs, ressoure https://www.learnrxjs.io\
\
Part 2: The forms\
lesson 5\
Allow the use to do input from the form\
   . import the module FormsModule from @angular/forms inside the AppModule\
   . add a <form> into the template\
   . add an attribut into the controller\
   . map it to the template with the two-way binding [] \
      . [] the attribut binding to display the data into the form \
      . () the event binding to send the data to the controller \
   . ngSubmit: the event which receiv the click of a submit of the form \
   . <form #emailForm="ngForm" (ngSubmit)="onSubmitForm(emailForm)">\
      . ngForm here is a directive coming from FormsModule imported into the AppModule and put on all balise <form>\
      . onSubmitForm() can receiv emailForm from it in argurment which is send to the method\
      . #emailForm is a reference local to the directive that we dont need to put and which is given to the directive\
\
Lesson 6\
The form reactive\
The form reactive is generate by TypeScript\
For this use the module ReactiveFormsModule.\
Use the FormBuiler to use generate an object of type FormGroup\
Reactive means Observable\
use of the Observable "valueChanges()" on the form with the directive "async" in the template and an alias declare with "as"
... operateur Spread\
\
Lesson 7\
Validator is use with form reactive\
   . at the this.formBuilder.group() add a validator "Validators.required"\
   . add validator by pattern for url with "Validators.pattern(this.urlRegex)"\
   . make the emis number of emit event (less refresh) of this.formBuilder.group by using "updateOn: 'blur'"