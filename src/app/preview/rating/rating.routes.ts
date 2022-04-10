import { Routes } from "@angular/router";
import { RatingUsagePage } from "./rating-usage/rating-usage.page";

export const routes: Routes = [
    { path: '', pathMatch: "full", redirectTo: 'rating-usage' },
    {
        path: 'rating-usage',
        component: RatingUsagePage,
    },
]