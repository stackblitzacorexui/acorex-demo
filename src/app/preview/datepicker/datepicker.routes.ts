import { Routes } from "@angular/router";
import { DatepickerUsagePage } from "./datepicker-usage/datepicker-usage.page";
import { DatepickerWithPrefix } from "./datepicker-with-prefix/datepicker-with-prefix.page";



export const routes: Routes = [
    { path: '', pathMatch: "full", redirectTo: 'calendar-usage' },
    {
        path: 'datepicker-usage',
        component: DatepickerUsagePage,
    },
    {
        path: 'datepicker-with-prefix',
        component: DatepickerWithPrefix,
    }
 
]