import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormPage } from './sample-forms/login-form/login-form.page';
import { RegisterFormPage } from './sample-forms/register-form/register-form.page';
import { RegisterUserPage } from './sample-forms/register-user/register-user.page';


const PAGES: any = [
    LoginFormPage,
    RegisterFormPage,
    RegisterUserPage
]

const MODULES: any = [

]
@NgModule({
    declarations: [...PAGES],
    imports: [CommonModule, ...MODULES],
    exports: [...PAGES],
    providers: [],
})
export class SharedModule { }