import { Routes } from "@angular/router";
import { SwitchAppearancesPage } from "./switch-appearances/switch-appearances.page";
import { SwitchDecorationPage } from "./switch-decoration/switch-decoration.page";
import { SwitchDisabledPage } from "./switch-disabled/switch-disabled.page";
import { SwitchLoadingPage } from "./switch-loading/switch-loading.page";
import { SwitchReadonlyPage } from "./switch-readonly/switch-readonly.page";
import { SwitchSizesPage } from "./switch-sizes/switch-sizes.page";
import { SwitchUsagePage } from "./switch-usage/switch-usage.page";




export const routes: Routes = [
    { path: '', pathMatch: "full", redirectTo: 'switch-usage' },
    {
        path: 'switch-usage',
        component: SwitchUsagePage,
    },
    {
        path: 'switch-appearances',
        component: SwitchAppearancesPage,
    },
    {
        path: 'switch-readonly',
        component: SwitchReadonlyPage,
    },
    {
        path: 'switch-disabled',
        component: SwitchDisabledPage,
    },
    {
        path: 'switch-decoration',
        component: SwitchDecorationPage,
    },
    {
        path: 'switch-loading',
        component: SwitchLoadingPage,
    },
    {
        path: 'switch-sizes',
        component: SwitchSizesPage,
    },
   
]