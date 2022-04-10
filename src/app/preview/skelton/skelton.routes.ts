import { Routes } from "@angular/router";
import { SkeltonAnimationModePage } from "./skelton-animation-mode/skelton-animation-mode.page";
import { SkeltonSimpleModePage } from "./skelton-simple-mode/skelton-simple-mode.page";
import { SkeltonUsagePage } from "./skelton-usage/skelton-usage.page";


export const routes: Routes = [
    { path: '', pathMatch: "full", redirectTo: 'skelton-usage' },
    {
        path: 'skelton-usage',
        component: SkeltonUsagePage,
    },
    {
        path: 'skelton-simple-mode',
        component: SkeltonSimpleModePage,
    },
    {
        path: 'skelton-animation-mode',
        component: SkeltonAnimationModePage,
    },

]