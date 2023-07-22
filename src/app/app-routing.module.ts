import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CefaSnapListComponent } from "./cefa-snap-list/cefa-snap-list.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";

const routes: Routes = [
    { path: 'cefasnaps', component: CefaSnapListComponent },
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