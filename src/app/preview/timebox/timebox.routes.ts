import { Routes } from "@angular/router";
import { TimeboxUsagePage } from "./timebox-usage/timebox-usage.page";

export const routes: Routes = [
    { path: '', pathMatch: "full", redirectTo: 'timebox-usage' },
    {
        path: 'timebox-usage',
        component: TimeboxUsagePage,
    },
]