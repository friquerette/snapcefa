import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { CommonModule } from "@angular/common";

const routes: Routes = [
    { path: 'auth/login', component: LoginComponent },
]
@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AuthRoutingModule {

}