import { Routes } from "@angular/router";
import { ToastUsagePage } from "./toast-usage/toast-usage.page";

export const routes: Routes = [
    { path: '', pathMatch: "full", redirectTo: 'toast-usage' },
    {
        path: 'toast-usage',
        component: ToastUsagePage,
    },
]