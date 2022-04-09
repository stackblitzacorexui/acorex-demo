import { Routes } from "@angular/router";
import { TabCustomPage } from "./tab-custom/tab-custom.page";
import { TabDecorationPage } from "./tab-decoration/tab-decoration.page";
import { TabtDisabledPage } from "./tab-disabled/tab-disabled.page";
import { TabUsagePage } from "./tab-usage/tab-usage.page";
import { TabViewContentPage } from "./tab-view-content/tab-view-content.page";

export const routes: Routes = [
    { path: '', pathMatch: "full", redirectTo: 'tab-usage' },
    {
        path: 'tab-usage',
        component: TabUsagePage,
    },
    {
        path: 'tab-decoration',
        component: TabDecorationPage,
    },
    {
        path: 'tab-disabled',
        component: TabtDisabledPage,
    },
    {
        path: 'tab-custom',
        component: TabCustomPage,
    }, 
    {
        path: 'tab-view-content',
        component: TabViewContentPage,
    },
    
    
    
    
]