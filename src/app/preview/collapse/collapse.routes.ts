import { Routes } from "@angular/router";
import { collapseAccordionNonCollapsedIndexPage } from "./collapse-accordion-non-collapsedIndex/collapse-accordion-non-collapsedIndex.page";
import { CollapseAccordionPage } from "./collapse-accordion/collapse-accordion.page";
import { CollapseGroupPage } from "./collapse-group/collapse-group.page";
import { CollapseHeaderePage } from "./collapse-header/collapse-header.page";
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
    {
        path: 'collapse-accordion-non-collapsed',
        component: collapseAccordionNonCollapsedIndexPage,
    },
    {
        path: 'collapse-header',
        component: CollapseHeaderePage,
    },
]