import { Routes } from "@angular/router";
import { NumberBoxDecorationPage } from "./number-box-decoration/number-box-decoration.page";
import { NumberBoxDisabledPage } from "./number-box-disabled/number-box-disabled.page";
import { NumberBoxReadonlyPage } from "./number-box-readonly/number-box-readonly.page";
import { NumberBoxUsagePage } from "./number-box-usage/number-box-usage.page";





export const routes: Routes = [
    { path: '', pathMatch: "full", redirectTo: 'number-box-usage' },
    {
        path: 'number-box-usage',
        component: NumberBoxUsagePage,
    },
    {
        path: 'number-box-readonly',
        component: NumberBoxReadonlyPage,
    },
    {
        path: 'number-box-disabled',
        component: NumberBoxDisabledPage,
    },
    {
        path: 'number-box-decoration',
        component: NumberBoxDecorationPage,
    },
   
]