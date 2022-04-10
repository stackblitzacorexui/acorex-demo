import { Routes } from "@angular/router";
import { BadgeLockPage } from "./badge-lock/badge-lock.page";
import { BadgePersonalizePage } from "./badge-personalize/badge-personalize.page";
import { BadgeSizesPage } from "./badge-sizes/badge-sizes.page";
import { BadgeUsagePage } from "./badge-usage/badge-usage.page";


export const routes: Routes = [
    { path: '', pathMatch: "full", redirectTo: 'badge-usage' },
    {
        path: 'badge-appearance',
        component: BadgeUsagePage,
    },
    {
        path: 'badge-personalize',
        component: BadgePersonalizePage,
    },
    {
        path: 'badge-sizes',
        component: BadgeSizesPage,
    },
    {
        path: 'badge-usage',
        component: BadgeUsagePage,
    },
    {
        path: 'badge-lock',
        component: BadgeLockPage,
    }
]