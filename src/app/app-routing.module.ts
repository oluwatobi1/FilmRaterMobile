import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { AuthComponent } from "./auth/auth.component";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";

const routes: Routes = [
    { path: "", redirectTo: "/auth", pathMatch: "full" },
    { path: "items", component: ItemsComponent },
    { path: "auth", component: AuthComponent },
    { path: "item/:id", component: ItemDetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
