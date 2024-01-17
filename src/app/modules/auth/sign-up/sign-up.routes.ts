import { Route, Routes } from '@angular/router';
import { AuthSignUpComponent } from 'app/modules/auth/sign-up/sign-up.component';

export const routers : Route[]= [
    {
        path     : '',
        component: AuthSignUpComponent,
    },
]
