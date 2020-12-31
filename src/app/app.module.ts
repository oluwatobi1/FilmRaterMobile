import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptFormsModule, NativeScriptModule } from "@nativescript/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ItemsComponent } from "./item/items.component";
import { AuthComponent } from "./auth/auth.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { HttpClientModule } from "@angular/common/http";


@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule,
        HttpClientModule,
    ],
    declarations: [
        AppComponent,
        ItemsComponent,
        AuthComponent,
        ItemDetailComponent,
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
