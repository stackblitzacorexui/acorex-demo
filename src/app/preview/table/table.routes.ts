import { Routes } from "@angular/router";
import { TableAlternatePage } from "./table-alternate/table-alternate.page";
import { TableResponsivePage } from "./table-responsive/table-responsive.page";
import { TableUsagePage } from "./table-usage/table-usage.page";

export const routes: Routes = [
    { path: '', pathMatch: "full", redirectTo: 'table-usage' },
    {
        path: 'table-usage',
        component: TableUsagePage,
    },
    {
        path: 'table-responsive',
        component: TableResponsivePage,
    },
    {
        path: 'table-alternate',
        component: TableAlternatePage,
    },
]