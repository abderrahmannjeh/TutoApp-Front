import {NgModule} from '@angular/core';
import {CommonModule, NgIf} from '@angular/common';
import {provideRouter, RouterLink} from "@angular/router";
import {AuthConfirmationRequiredComponent} from "./confirmation-required.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {routes} from "./confirmation-required.routes";


@NgModule({
    declarations: [AuthConfirmationRequiredComponent],
    imports: [
        CommonModule, RouterLink, ReactiveFormsModule,
        NgIf,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatCheckboxModule,
        MatProgressSpinnerModule
    ],
    providers: [provideRouter(routes)]
})
export class ConfirmationRequredModule {
}
