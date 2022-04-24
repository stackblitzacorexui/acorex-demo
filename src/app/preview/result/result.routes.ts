import { Routes } from "@angular/router";
import { Result400Page } from "./result-400/result-400.page";
import { Result403Page } from "./result-403/result-403.page";
import { Result500Page } from "./result-500/result-500.page";
import { ResultCustomIconPage } from "./result-custom-icon/result-custom-icon.page";
import { ResultCustomImagePage } from "./result-custom-image/result-custom-image.page";
import { ResultDangerStatusPage } from "./result-danger-status/result-danger-status.page";
import { ResultUsagePage } from "./result-usage/result-usage.page";
import { ResultWarningStatusPage } from "./result-warning-status/result-warning-status.page";

export const routes: Routes = [
    { path: '', pathMatch: "full", redirectTo: 'result-usage' },
    {
        path: 'result-usage',
        component: ResultUsagePage,
    },
    {
        path: 'result-warning-status',
        component: ResultWarningStatusPage,
    },
    {
        path: 'result-danger-status',
        component: ResultDangerStatusPage,
    },
    {
        path: 'result-danger-status',
        component: ResultDangerStatusPage,
    },
    {
        path: 'result-400',
        component: Result400Page,
    },
    {
        path: 'result-403',
        component: Result403Page,
    },
    {
        path: 'result-500',
        component: Result500Page,
    },
    {
        path: 'result-custom-icon',
        component: ResultCustomIconPage,
    },
    {
        path: 'result-custom-image',
        component: ResultCustomImagePage,
    },
    
]

