import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CefaSnapListComponent } from "./cefa-snap-list/cefa-snap-list.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { SingleCefaSnapComponent } from "./single-cefa-snap/single-cefa-snap.component";
import { NewCefaSnapComponent } from "./new-cefa-snap/new-cefa-snap.component";

const routes: Routes = [
    { path: 'cefasnaps', component: CefaSnapListComponent },
    { path: 'cefasnaps/:id', component: SingleCefaSnapComponent },
    { path: 'create', component: NewCefaSnapComponent },
    { path: '', component: LandingPageComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
     exports: [
        RouterModule
     ]
})
export class AppRoutingModule {}