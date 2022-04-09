import { Routes } from "@angular/router";
import { TreeViewPage } from "./tree-view-usage/tree-view-usage.page";

export const routes: Routes = [
    { path: '', pathMatch: "full", redirectTo: 'toast-usage' },
    {
        path: 'tree-view-usage',
        component: TreeViewPage,
    },
]