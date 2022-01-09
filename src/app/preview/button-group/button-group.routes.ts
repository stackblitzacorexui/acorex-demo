import { Routes } from "@angular/router";

import { ButtonGroupMultiple } from "./button-group-multiple/button-group-multiple.page";
import { ButtonGroupSingle } from "./button-group-single/button-group-single.page";
import { ButtonGroupUsage } from "./button-group-usage/button-group-usage.page";


export const routes: Routes = [
    { path: '', pathMatch: "full", redirectTo: 'badge-usage' },
    {
        path: 'button-group-usage',
        component: ButtonGroupUsage,
    },
    {
        path: 'button-group-single',
        component: ButtonGroupSingle,
    },
    {
        path: 'button-group-multiple',
        component: ButtonGroupMultiple,
    }
]