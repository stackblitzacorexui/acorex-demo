import { Routes } from "@angular/router";
import { AlertAdditionalPage } from "./alert-additional/alert-additional.page";
import { AlertAppearancePage } from "./alert-appearance/alert-appearance.page";
import { AlertButtonsPage } from "./alert-buttons/alert-buttons.page";
import { AlertLockPage } from "./alert-lock/alert-lock.page";
import { AlertMethodsPage } from "./alert-methods/alert-methods.page";
import { AlertSuffixPage } from "./alert-suffix/alert-suffix.page";
import { AlertUsagePage } from "./alert-usage/alert-usage.page";

export const routes: Routes = [
    { path: '', pathMatch: "full", redirectTo: 'alert-usage' },
    {
        path: 'alert-usage',
        component: AlertUsagePage,
    },
    {
        path: 'alert-additional',
        component: AlertAdditionalPage,
    },
    {
        path: 'alert-appearance',
        component: AlertAppearancePage,
    },
    {
        path: 'alert-buttons',
        component: AlertButtonsPage,
    },
    {
        path: 'alert-methods',
        component: AlertMethodsPage,
    },
    {
        path: 'alertsuffix',
        component: AlertSuffixPage,
    }
    ,
    {
        path: 'alert-lock',
        component: AlertLockPage,
    }
]