# Snapcefa

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

https://leetcode.com/problemset/all/
https://github.com/varunu28/LeetCode-Java-Solutions/tree/master/Easy






https://openclassrooms.com/fr/courses/7471261-debutez-avec-angular


Cours 2 - 2023/07/09
Angylar utilise HTML, SCSS et TypeScript
TypeScript: typage script
Node + package manager NPM
utilise NPM pour installer le CLI (Command Line Interface) de Angular
CLI utilisé pour créer gérer et déployer les applications


En résumé
* Pour installer le CLI d'Angular, il vous faut une version LTS de Node et npm.
* On installe le CLI avec la commande  npm i -g @angular/cli
* On peut vérifier la version installée du CLI avec  ng v

Cours 3 - 2023/07/10
Création de l’application
Pour créer une application, utilise la commande 
ng new appname –style=scss –skip-tests=true
pour SCSS ou LESS ou CSS
CLI demande si ajoute du Routing, pour le moment non car ajouté plus tard manuellement
Lancement du serveur
utilisation de la commande ng serve
Exploration de l’application
l’applicaiton contient un répertoire src avec un fichier index.html
la page index.html contient une balige <app-root>
c’est la racine de l’application avec l’AppComponent de base de l’application.
Angular s’occupe de remplacer cette balise par le component en question
le sous dossier app contient quatre fichiers :
* app.module.ts : app root correspond à ce app component
* html : le contenu et le style, la structure de la page affiché dans la page index.html
* ts : fichier typescript, qui contient l’url du template html + scss qui dit de remplacer la balise app root
* scss 
En résumé
* Une nouvelle application Angular se crée avec  ng new
* ng serve  exécute le serveur de développement.
* La balise  <app-root>  correspond à AppComponent.

Cours 4 - 2023/07/11
Création d’un composant (a component)
utilise la ligne de commande ng generate component face-snap
la commande component est inutile ici
création d’un répertoire face-snap qui contient un fichier TypeScript, HTML (un template) et SCSS.
Le fichier face-snap.component.ts 
Cette classe est créé avec un décorateur @Component
Le décorateur ajoute un comportement à une classe et est importé du package @angular/core. Ce décorateur prend trois arguments  avec un objet de configuration qui a un sélecteur, un fichier de template et un fichier de styles.
@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
ajout du composant <app-face-snap></app-face-snap> dans le composant <app-root></app-root>


En résumé
* Une application Angular peut être vue comme une arborescence de components.
* Un component lie un template HTML et des styles SCSS à du comportement TS.
* Pour créer un component, on utilise la commande  ng generate component nom-du-component
* Le sélecteur d'un component correspond à la balise HTML personnalisée qu'on utilisera pour l'insérer dans l'application.

Cours 5 - 2023/07/12
Affichage de donnée dynamique, deux façon façon d’afficher des données
* string interpolation: affiche la valeur d’une propriété dans le template, utilise {{titre}}
* attribut binding: permet de faire une liaison par attribut avec [[src]] dans <img [src]="imageUrl" [title]="title">
En résumé
* On déclare les propriétés d'un component en haut de sa classe, et on les initialise dans la méthode  ngOnInit()
* La méthode  ngOnInit()  est appelée une fois par instance de component au moment de la création de cette instance.
* La string interpolation avec les doubles accolades  {{ }}  permet d'insérer la valeur d'une propriété TypeScript dans le template.
* L'attribute binding permet de lier la valeur d'une propriété TypeScript à un attribut HTML, en mettant l'attribut entre crochets  []  et en passant le nom de la propriété.

Cours 6 - 2023/07/13
event binding : utilise (click) et non (onclick) exemple <button (click)="onAddSnap()">Oh Snap!</button>
En résumé
* Pour lier une méthode à un événement d'un élément du template, mettez l'événement entre parenthèses  ()  et passez la méthode en argument ; ex. : (click)="onClickButton()"
Dans le prochain et dernier chapitre de cette partie du cours, vous allez ajouter des propriétés personnalisées à vos components pour leur passer des données depuis l'extérieur ! 

Cours 7 - 2023/07/16
Input  doit être ajouté aux imports depuis  @angular/core  !
En résumé
* N'hésitez pas à créer vos propres types, sous forme de classe par exemple, pour faciliter la manipulation de données dans votre application.
* Une propriété personnalisée est rendue injectable depuis l'extérieur grâce au décorateur  @Input()
* Une propriété en  @Input()  est utilisable comme n'importe quelle autre propriété : on peut en afficher les éléments, les modifier… 
* On lie ensuite une valeur à cette propriété depuis le component parent avec l'attribute binding, c'est-à-dire le nom de la propriété entre crochets  []  en passant la valeur entre les guillemets ; ex. : [faceSnap]="mySnap"
Qu'avez-vous appris dans cette partie du cours ?
* Vous avez créé votre premier component.
* Vous avez utilisé la string interpolation pour afficher des valeurs dans le template.
* Vous avez employé l'attribute binding, d'abord pour lier des valeurs à des attributs natifs HTML comme la src d'une image, et ensuite à une propriété personnalisée de votre component.
* Vous avez réagi à des événements venant du template avec l'event binding.
Construire des components - Quiz
1. Quels sont les fichiers principaux d'un component Angular ?
Un fichier HTML, un fichier SCSS et un fichier TS.
2. Qu'est-ce que la string interpolation ?
La string interpolation permet d'afficher la valeur d'une variable dans le DOM.
3. Quelle syntaxe utilise-t-on pour la string interpolation ?
Les doubles accolades  {{ }}
4. Qu'est-ce que la liaison par attribut, ou attribute binding ?
Elle permet de lier la valeur d'une variable à un attribut d'un élément du DOM.
5. Que met-on autour de l'attribut dans le HTML pour la liaison par attribut, ou attribute binding ?
Les crochets  []
6. Qu'est-ce que la liaison par événement, ou event binding ?
Elle permet de lier une méthode TypeScript à un événement du DOM.
7. Que met-on autour du nom de l'événement dans le HTML pour la liaison par événement, ou event binding ?
Les parenthèses  ()
8. Quel décorateur utilise-t-on pour rendre une propriété de component injectable depuis son parent ?
@Input()
9. Mon component  CoffeeCupComponent  a une propriété injectable  size  . Quelle syntaxe est correcte pour lui passer une variable appelée "largeSize" ?
<app-coffee-cup [size]="largeSize"></app-coffee-cup>

Cours 7 - 2023/07/17
utilisation de la directive ngIf
si attribut existe une condition if est évalué truthy (true), si l’attribut n’existe pas (undified) alors évalué falsey (false)
https://adripofjavascript.com/blog/drips/truthy-and-falsy-values-in-javascript.html


En résumé
   * Vous pouvez ajouter des propriétés optionnelles à une classe en y ajoutant un point d'interrogation  ?
   * Ajouter la directive  *ngIf  à un élément (qui peut aussi être un component) dit à Angular d'ajouter ou non cet élément au DOM selon la condition que vous lui passez, par exemple  <p *ngIf="size === 'large'">

Cours 8 - 2023/07/18
En résumé
   * La directive  *ngFor  vous permet d'insérer un élément dans le DOM pour chaque élément dans un tableau.
   * La syntaxe  let element of array  vous donne accès à l'élément de chaque itération, vous permettant de l'injecter dans un component, par exemple.

Cours 9 - 2023/07/18
En résumé
   * La directive  [ngStyle]  permet d'appliquer des styles qui dépendent de valeurs dynamiques, comme un texte qui, plus il y a de snaps, devient de plus en plus vert.
   * La directive  [ngStyle]  prend comme argument un objet où les clés correspondent aux styles CSS à modifier, et les valeurs aux valeurs que doivent prendre ces styles.

Cours 10 - 2023/07/19
En résumé
   * La directive  [ngClass]  permet d'ajouter dynamiquement des classes à des éléments HTML.
   * [ngClass]  prend un objet en argument où les clés sont des noms de classe CSS, et les valeurs sont les conditions selon lesquelles les classes doivent être appliquées.

Cours 11 - 2023/07/19
En résumé
   * Un pipe permet de formater l'affichage d'une donnée sans modifier la donnée sous-jacente.
   * Angular fournit trois pipes pour modifier la casse affichée d'une chaîne de caractères : UpperCasePipe, LowerCasePipe, et TitleCasePipe pour les majuscules, les minuscules et le mélange type "titre".

Cours 12 - 2023/07/19
En résumé
   * DatePipe permet de formater les dates, et sans configuration fournit un formatage par défaut.
   * DatePipe fournit des configurations prédéfinies avec des noms comme  short,  longDate  ou  mediumTime
   * DatePipe permet également de personnaliser totalement le format d'affichage des dates avec des chaînes de caractères qui encodent le format souhaité, par exemple  'à HH:mm, le d MMMM yyyy'


Cours 13 - 2023/07/20
En résumé
   * DecimalPipe (mot-clé  number ) vous permet d'afficher un nombre selon les règles de la locale de l'application.
   * PercentPipe affiche un nombre entre 0 et 1 sous forme de pourcentage, arrondi par défaut à l'entier le plus proche.
   * DecimalPipe et PercentPipe acceptent un argument de configuration sous la forme 'chiffresMinAvantVirgule.chiffresMinAprèsVirgule-chiffresMaxAprèsVirgule' ex. :  '1.0-1'
   * CurrencyPipe facilite l'affichage des montants d'argent, et accepte plusieurs arguments de configuration séparés par des deux-points  :
Qu'avez-vous appris dans cette partie du cours ?
   * Vous avez découvert les pipes – des outils pour gérer le format d'affichage d'une donnée sans modifier la donnée elle-même.
   * Vous avez changé la casse de vos chaînes de caractères avec UpperCasePipe, LowerCasePipe et TitleCasePipe.
   * Vous avez modifié l'affichage de la date de création des FaceSnaps avec DatePipe, et vous avez vu les différentes manières de personnaliser l'affichage des dates en passant un argument de configuration à DatePipe.
   * Vous avez manipulé le format d'affichage des nombres avec DecimalPipe, PercentPipe et CurrencyPipe.
________________
Cours 14 - 2023/07/21
Pour rappel, ajouter un modificateur d'accès comme  public  ou  private  à un argument du  constructor  crée une propriété avec ce nom-là dans la classe. Vous aurez donc accès au service via la propriété  faceSnapsService.
On préfère généralement  private  pour les injections de service, car ça empêche le template du component d'y accéder directement. Donner au template accès aux injections serait un anti-pattern Angular – autrement dit, une approche plus que déconseillée, souvent pour des raisons qui ne sont pas flagrantes au premier abord.
En résumé
      * Les services permettent de centraliser les données et la logique pour les différents domaines de votre application.
      * Créer un service est aussi simple qu'ajouter le décorateur  @Injectable()  à une classe.
      * Pour injecter un service dans un component, ajoutez un argument au constructor du component qui a le type du service, par exemple private userService: UserService

Cours 15 - 2023/07/21
Créer des types "limités" comme ça, sous forme de literal types, ce n'est pas limité aux chaînes de caractères ! Pour plus d'informations sur les literal types, n'hésitez pas à plonger dans la documentation TypeScript.
En résumé
      * Centraliser les interactions dans un service sous forme de méthodes crée une structure plus modulaire, qui facilite la maintenance et les évolutions de votre application.
      * Comme dans toute base de code, refactorisez pour éviter de répéter des blocs de code (le principe DRY : Don't Repeat Yourself).
      * Les literal types permettent de créer rapidement des types personnalisés, souvent utilisés pour limiter les choix pour un argument de méthode, par exemple : fileType: 'image' | 'video'

Cours 16 - 2023/07/22
En résumé
      * Un module de routing contient un tableau de type  Routes  qui contient les routes de l'application.
      * Une route est un objet de type  { path: 'myPath', component: MyComponent }  qui spécifie le component à afficher pour chaque route.
      * On appelle  RouterModule.forRoot()  en passant le tableau de routes pour enregistrer les routes dans le routeur Angular.
      * On enregistre le module de routing dans AppModule pour ajouter le routeur configuré à l'application.
      * On ajoute une balise  <router-outlet>  pour dire à quel niveau du template le component de la route active doit être inséré.
      * Pour ajouter des fichiers statiques à une application (comme des images), on les stocke dans le dossier  assets
      
Cours 17 - 2023/07/22
En résumé
      * Créez des liens qui permettent de passer d'une route à l'autre avec la directive  routerLink.
      * Ajoutez des classes CSS aux liens correspondants à la route activée avec  routerLinkActive.
      * Ignorez l'activation des routes enfants avec  [routerLinkActiveOptions]="{ exact: true }".
      * Injectez le Router dans vos components et utilisez sa méthode  navigateByUrl()  pour de la navigation programmatique.
________________
Cours 18 - 2023/07/23
onViewFaceSnap() { this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
}
J'ai utilisé la syntaxe template literal (avec les backticks `) pour rendre plus lisible la chaîne de caractères passée à la méthode. Pour plus d'informations sur cette syntaxe ultra utile, voici les docs MDN sur les template literals.
En résumé
      * On récupère les paramètres de la route activée en injectant ActivatedRoute, et via son objet  snapshot.params.
      * Pour naviguer vers une route absolue (et non relative), n'oubliez pas d'ajouter un  /  au début de la route demandée
Qu'avez-vous appris dans cette partie du cours ?
      * Vous avez centralisé données et logique dans un service que vous avez ensuite injecté dans les components concernés.
      * Vous avez ajouté un module de routing à votre application, et trois routes fonctionnelles.
      * Vous avez mis en place deux systèmes pour que vos utilisateurs puissent changer de route : les routerLinks et le Router.


      1. Quel décorateur permet de transformer facilement une classe TypeScript en service ?
@Injectable()
      2. Quelle option ci-dessous enregistre FolderService à la racine de mon application ?
  
      3. Je veux injecter un service MarbleService dans GamesComponent. Quelle est la bonne syntaxe ?
  
      4. Mon service LightsService contient une méthode  getAllLights()  qui retourne un tableau de type  Light[]  .
Dans RedLightsComponent, je veux initialiser ma propriété  lights  à partir de la méthode du service.
Comment je fais ?
  
      5. Voici la déclaration de la méthode addCowbell() de CowbellService : addCowbell(howMuch: 'some' | 'more', when: number): Cowbell[] {
  //…
}
Quelle expression ci-dessous est valable ?
  
      6. Quelle déclaration de route associe correctement le component CoffeeComponent à la route 'coffee' ?
  

      7. Quel lien se verra attribuer la classe 'active-link' lorsque la route qui y correspond sera la route active ?
  
      8. Quelle balise permet de spécifier l'endroit dans le DOM où le component de la route active sera inséré ?
  
      9. Une fois le Router injecté dans GadgetComponent, comment je l'utilise pour naviguer vers la route new-gadgets  ?
  
      10. La route où se trouve mon component contient un paramètre dynamique  oldAmount  . Je veux récupérer ce paramètre et l'utiliser pour appeler cette méthode de service :
calculateNewAmount(oldAmount: number): number {
  //…
}
Quelle est la bonne solution ?
  


Conclusion
Félicitations !
Vous avez terminé ce cours d'introduction à Angular ! Vous avez créé une Single Page App qui utilise plusieurs des différentes briques d'une application Angular complète. Vous avez déjà énormément appris.
Mais ce n'est pas fini ! L'objectif de ce cours a été de vous aider à construire les fondations d'un apprentissage complet : il vous reste plein de choses à apprendre pour être totalement opérationnel. Par exemple :
         * les Observables : un sujet énorme en Angular, qui permet de créer des applications réactives et performantes ;
         * les formulaires : permettez à vos utilisateurs d'interagir de manière totalement dynamique avec l'application ;
         * les requêtes HTTP : quasiment toute application moderne a besoin de communiquer avec un serveur d'une manière ou d'une autre ;
         * les modules : améliorez la structure et les performances de vos applications, en les séparant en modules et en implémentant le lazy loading.