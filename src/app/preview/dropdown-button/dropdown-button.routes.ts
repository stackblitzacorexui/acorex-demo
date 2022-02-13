import { Routes } from "@angular/router";
import { DropdownButtonCustomPanelPage } from "./dropdown-button-custom-panel/dropdown-button-custom-panel.page";
import { DropdownButtonSinglePage } from "./dropdown-button-single/dropdown-button-single.page";
import { DropdownButtonSplitPage } from "./dropdown-button-split/dropdown-button-split.page";





export const routes: Routes = [
    { path: '', pathMatch: "full", redirectTo: 'dropdown-button-split' },
    {
        path: 'dropdown-button-split',
        component: DropdownButtonSplitPage,
    },
    {
        path: 'dropdown-button-single',
        component: DropdownButtonSinglePage,
    },
    {
        path: 'dropdown-button-custom-panel',
        component: DropdownButtonCustomPanelPage,
    },
   
]