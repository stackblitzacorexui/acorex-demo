import { Routes } from "@angular/router";
import { MenuUsagePage } from "./menu-usage/menu-usage.page";

export const routes: Routes = [
    { path: '', pathMatch: "full", redirectTo: 'menu-usage' },
    {
        path: 'menu-usage',
        component: MenuUsagePage,
    }

]