import { Routes } from "@angular/router";

import { PasswordBoxShowToggleButtonPage } from "./password-box-show-toggle-button/password-box-show-toggle-button.page";



export const routes: Routes = [
    { path: '', pathMatch: "full", redirectTo: 'password-box-show-toggle-button' },
    {
        path: 'password-box-show-toggle-button',
        component: PasswordBoxShowToggleButtonPage,
    }
]