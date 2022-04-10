import { Routes } from "@angular/router";
import { ProgressbarDecorationPage } from "./progressbar-decoration/progressbar-decoration.page";
import { ProgressbarUsagePage } from "./progressbar-usage/progressbar-usage.page";


export const routes: Routes = [
    { path: '', pathMatch: "full", redirectTo: 'progressbar-usage' },
    {
        path: 'progressbar-usage',
        component: ProgressbarUsagePage,
    },
    {
        path: 'progressbar-decoration',
        component: ProgressbarDecorationPage,
    },


]