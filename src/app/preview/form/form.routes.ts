import { Routes } from "@angular/router";
import { FormUsagePage } from "./form-usage/form-usage.page";

export const routes: Routes = [
    { path: '', pathMatch: "full", redirectTo: 'form-usage' },
    {
        path: 'form-usage',
        component: FormUsagePage,
    },


]