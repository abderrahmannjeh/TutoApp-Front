import {NgModule} from '@angular/core';
import {CommonModule, NgIf} from '@angular/common';
import {provideRouter, RouterLink} from "@angular/router";
import {routes} from "./forgot-password.routes";
import {AuthForgotPasswordComponent} from "./forgot-password.component";
import {FuseAlertComponent} from "../../../../@fuse/components/alert";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


@NgModule({
    declarations: [AuthForgotPasswordComponent],
    imports: [
        CommonModule,
        NgIf, FuseAlertComponent, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatProgressSpinnerModule, RouterLink
    ],
    providers: [provideRouter(routes)]
})
export class ForgotPasswordModule {
}
