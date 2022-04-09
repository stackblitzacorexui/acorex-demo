import { Routes } from "@angular/router";
import { TextboxDecorationPage } from "./textbox-decoration/textbox-decoration.page";
import { TextboxDisabledPage } from "./textbox-disabled/textbox-disabled.page";
import { TextboxMaskPage } from "./textbox-mask/textbox-mask.page";
import { TextboxReadonlyPage } from "./textbox-readonly/textbox-readonly.page";
import { TextboxUsagePage } from "./textbox-usage/textbox-usage.page";


export const routes: Routes = [
    { path: '', pathMatch: "full", redirectTo: 'textbox-usage' },
    {
        path: 'textbox-usage',
        component: TextboxUsagePage,
    },
    {
        path: 'textbox-readonly',
        component: TextboxReadonlyPage,
    },
    {
        path: 'textbox-disabled',
        component: TextboxDisabledPage,
    },
    {
        path: 'textbox-decoration',
        component: TextboxDecorationPage,
    },
    {
        path: 'textbox-mask',
        component: TextboxMaskPage,
    },
]