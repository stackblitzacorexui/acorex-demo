import { Routes } from "@angular/router";
import { DialogAlertConfirmPage } from "./dialog-alert-confirm/dialog-alert-confirm.page";
import { DialogAppearancePage } from "./dialog-appearance/dialog-appearance.page";
import { DialogCustomPage } from "./dialog-custom/dialog-custom.page";



export const routes: Routes = [
    { path: '', pathMatch: "full", redirectTo: 'dialog-appearance' },
    {
        path: 'dialog-appearance',
        component: DialogAppearancePage,
    },
    {
        path: 'dialog-alert-confirm',
        component: DialogAlertConfirmPage,
    },
    {
        path: 'dialog-custom',
        component: DialogCustomPage,
    }
 
]