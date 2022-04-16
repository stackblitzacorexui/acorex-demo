import { Routes } from "@angular/router";
import { CollapseAccordionPage } from "./collapse-accordion/collapse-accordion.page";
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
    {
        path: 'collapse-accordion',
        component: CollapseAccordionPage,
    },
    
]