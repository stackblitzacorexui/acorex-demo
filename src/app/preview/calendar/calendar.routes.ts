import { Routes } from "@angular/router";
import { CalendarDateRangePage } from "./calendar-date-range/calendar-date-range.page";
import { CalendarDisabledPage } from "./calendar-disabled/calendar-disabled.page";
import { CalendarReadonlyPage } from "./calendar-readonly/calendar-readonly.page";
import { CalendarUsagePage } from "./calendar-usage/calendar-usage.page";
import { CalendarViewDepthPage } from "./calendar-view-depth/calendar-view-depth.page";


export const routes: Routes = [
    { path: '', pathMatch: "full", redirectTo: 'calendar-usage' },
    {
        path: 'calendar-usage',
        component: CalendarUsagePage,
    },
    {
        path: 'calendar-view-depth',
        component: CalendarViewDepthPage,
    },
    {
        path: 'calendar-readonly',
        component: CalendarReadonlyPage,
    },
    {
        path: 'calendar-disabled',
        component: CalendarDisabledPage,
    },
    {
        path: 'calendar-date-range',
        component: CalendarDateRangePage,
    }
]