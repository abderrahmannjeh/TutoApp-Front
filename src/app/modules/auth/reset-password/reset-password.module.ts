import {NgModule} from '@angular/core';
import {CommonModule, NgIf} from '@angular/common';
import {AuthResetPasswordComponent} from "./reset-password.component";
import {FuseAlertComponent} from "../../../../@fuse/components/alert";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {provideRouter, RouterLink} from "@angular/router";
import {routes} from "./reset-password.routes";


@NgModule({
    declarations: [AuthResetPasswordComponent],
    imports: [
        CommonModule,
        NgIf, FuseAlertComponent, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule, RouterLink
    ],
    providers: [provideRouter(routes)]
})
export class ResetPasswordModule {
}
