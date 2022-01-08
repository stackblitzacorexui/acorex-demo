import { Routes } from "@angular/router";
import { ButtonAppearancesPage } from "./button-appearances/button-appearances.page";
import { ButtonDecorationPage } from "./button-decoration/button-decoration.page";
import { ButtonDisabledPage } from "./button-disabled/button-disabled.page";
import { ButtonLookPage } from "./button-look/button-look.page";
import { ButtonSizesPage } from "./button-sizes/button-sizes.page";
import { ButtonToggleablePage } from "./button-toggleable/button-toggleable.page";
import { ButtonUsagePage } from "./button-usage/button-usage.page";



export const routes: Routes = [
    { path: '', pathMatch: "full", redirectTo: 'button-usage' },
    {
        path: 'button-usage',
        component: ButtonUsagePage,
    },
    {
        path: 'button-appearance',
        component: ButtonAppearancesPage,
    },
    {
        path: 'button-look',
        component: ButtonLookPage,
    },
    {
        path: 'button-disabled',
        component: ButtonDisabledPage,
    },
    {
        path: 'button-decoration',
        component: ButtonDecorationPage,
    },
    {
        path: 'button-toggleable',
        component: ButtonToggleablePage,
    },
    {
        path: 'button-sizes',
        component: ButtonSizesPage,
    },
    
]