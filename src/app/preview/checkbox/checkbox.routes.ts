import { Routes } from "@angular/router";
import { CheckboxUsagePage } from "./checkbox-usage/checkbox-usage.page";



export const routes: Routes = [
    { path: '', pathMatch: "full", redirectTo: 'calendar-usage' },
    {
        path: 'calendar-usage',
        component: CheckboxUsagePage,
    }
]