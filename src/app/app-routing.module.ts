import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LandingPageComponent } from "./landing-page/components/landing-page/landing-page.component";
import { CefaSnapRoutingModule } from "./cefa-snaps/cefa-snap-routing.module";

const routes: Routes = [
    // here the routing lady load the module CefaSnapsModule
    { path: 'auth', loadChildren: () => import('./auth/auth-routing.module').then(m => m.AuthRoutingModule) },
    { path: 'cefasnaps', loadChildren: () => import('./cefa-snaps/cefa-snaps.module').then(m => m.CefaSnapsModule) },
    { path: '', component: LandingPageComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
     exports: [
        CefaSnapRoutingModule
     ]
})
export class AppRoutingModule {}