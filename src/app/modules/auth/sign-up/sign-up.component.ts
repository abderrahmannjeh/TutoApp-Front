import {ChangeDetectorRef, Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {
    FormBuilder,
    UntypedFormGroup,
    Validators
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertType } from '@fuse/components/alert';
import {AuthService, UserDTO} from "../../../../../swagger-api";

@Component({
    selector     : 'auth-sign-up',
    templateUrl  : './sign-up.component.html',
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class AuthSignUpComponent implements OnInit
{
    @ViewChild('signUpNgForm') signUpNgForm: UntypedFormGroup;

    alert: { type: FuseAlertType; message: string } = {
        type   : 'success',
        message: '',
    };
    signUpForm: UntypedFormGroup;
    showAlert: boolean = false;
    private user: UserDTO

    /**
     * Constructor
     */
    constructor(
        private _authService: AuthService,
        private _formBuilder: FormBuilder,
        private _router: Router,
        private dc: ChangeDetectorRef
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Create the form
        this.signUpForm = this._formBuilder.group({
                firstName      : this._formBuilder.control('', Validators.required),
                lastName      : ['', Validators.required],
                email     : ['', [Validators.required, Validators.email]],
                password  : ['', Validators.required],
                isStore   : [false]
            },
        );
    }
    get firstName(){
        return this.signUpForm?.get('firstName');
    }    get lastName(){
        return this.signUpForm?.get('lastName');
    }    get email(){
        return this.signUpForm?.get('email');
    }    get password(){
        return this.signUpForm?.get('password');
    }    get isStore(){
        return this.signUpForm?.get('isStore');
    }
    signUp(): void
    {
        this.showAlert = false;
        var user = this.signUpForm.value as UserDTO
        this._authService.apiAuthRegisterPost(user).subscribe(res=>{
            if(res.hasError){
                this.alert ={
                    type:'error',
                    message: res.error
                }
                this.showAlert = true;
            }
            else {
                localStorage.setItem('accessToken',res.token);
                localStorage.setItem('user',JSON.stringify(res));
                this._router.navigateByUrl('/example');
            }
        })

    }

    changeStore() {
        console.log(this.isStore.value)
        if(this.isStore.value == true){
            this.lastName.clearValidators();
            this.lastName.setValue(null)
        }
        else {
            this.lastName.addValidators(Validators.required)
        }
        this.dc.detectChanges();

    }
}
