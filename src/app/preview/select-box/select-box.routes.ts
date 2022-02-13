import { Routes } from "@angular/router";
import { SelectBoxDisabledItemsPage } from "./select-box-disabled-items/select-box-disabled-items.page";
import { SelectBoxLazyLoadPage } from "./select-box-lazy-load/select-box-lazy-load.page";
import { SelectBoxMultiplePage } from "./select-box-multiple/select-box-multiple.page";
import { SelectBoxShowCheckboxesPage } from "./select-box-show-checkboxes/select-box-show-checkboxes.page";
import { SelectBoxSignlePage } from "./select-box-signle/select-box-signle.page";

export const routes: Routes = [
    { path: '', pathMatch: "full", redirectTo: 'select-box-signle' },
    {
        path: 'select-box-show-checkboxes',
        component: SelectBoxShowCheckboxesPage,
    },
    {
        path: 'select-box-multiple',
        component: SelectBoxMultiplePage,
    },
    {
        path: 'select-box-lazy-load',
        component: SelectBoxLazyLoadPage,
    },
    {
        path: 'select-box-disabled-items',
        component: SelectBoxDisabledItemsPage,
    },
    {
        path: 'select-box-signle',
        component: SelectBoxSignlePage,
    },
]