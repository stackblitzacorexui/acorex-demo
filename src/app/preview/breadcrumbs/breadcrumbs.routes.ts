import { Routes } from "@angular/router";
import { BreadcrumbsDecorationPage } from "./breadcrumbs-decoration/breadcrumbs-decoration.page";
import { BreadcrumbsnUsagePage } from "./breadcrumbs-usage/breadcrumbs-usage.page";


export const routes: Routes = [
    { path: '', pathMatch: "full", redirectTo: 'breadcrumbs-usage' },
    {
        path: 'breadcrumbs-usage',
        component: BreadcrumbsnUsagePage,
    },
    {
        path: 'breadcrumbs-decoration',
        component: BreadcrumbsDecorationPage,
    },
    

]