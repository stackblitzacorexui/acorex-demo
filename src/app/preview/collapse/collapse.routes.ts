import { Routes } from "@angular/router";
import { CollapseGroupPage } from "./collapse-group/collapse-group.page";
import { CollapseUsagePage } from "./collapse-usage/collapse-usage.page";


export const routes: Routes = [
    { path: '', pathMatch: "full", redirectTo: 'collapse-usage' },
    {
        path: 'collapse-usage',
        component: CollapseUsagePage,
    },
    {
        path: 'collapse-group',
        component: CollapseGroupPage,
    },

]