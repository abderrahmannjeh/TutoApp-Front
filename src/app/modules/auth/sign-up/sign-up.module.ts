import {NgModule} from '@angular/core';
import {CommonModule, NgIf} from '@angular/common';
import {provideRouter, RouterLink} from "@angular/router";
import {FuseAlertComponent} from "../../../../@fuse/components/alert";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { AuthSignUpComponent } from './sign-up.component';
import { routers } from './sign-up.routes';


@NgModule({
    declarations: [AuthSignUpComponent],
    imports: [
        CommonModule,
        RouterLink,
        FuseAlertComponent,
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
    providers: [provideRouter(routers)]
})
export class SignUpModule {
}
