import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CefaSnapListComponent } from "./cefa-snap-list/cefa-snap-list.component";
import { SingleCefaSnapComponent } from "./single-cefa-snap/single-cefa-snap.component";
import { NewCefaSnapComponent } from "./new-cefa-snap/new-cefa-snap.component";

const routes: Routes = [
    { path: 'create', component: NewCefaSnapComponent },
    { path: 'list', component: CefaSnapListComponent },
    { path: ':id', component: SingleCefaSnapComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
}
)
export class CefaSnapRoutingModule {

}