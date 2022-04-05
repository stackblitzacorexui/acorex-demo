import { Routes } from "@angular/router";
import { SelectBoxCascadingPage } from "./select-box-cascading/select-box-cascading.page";
import { SelectBoxDisabledItemsPage } from "./select-box-disabled-items/select-box-disabled-items.page";
import { SelectBoxGroupingPage } from "./select-box-grouping/select-box-grouping.page";
import { SelectBoxLazyLoadPage } from "./select-box-lazy-load/select-box-lazy-load.page";
import { SelectBoxMultiplePage } from "./select-box-multiple/select-box-multiple.page";
import { SelectBoxSearchPage } from "./select-box-search/select-box-search.page";
import { SelectBoxShowCheckboxesPage } from "./select-box-show-checkboxes/select-box-show-checkboxes.page";
import { SelectBoxSignlePage } from "./select-box-single/select-box-single.page";

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
        path: 'select-box-single',
        component: SelectBoxSignlePage,
    },
    {
        path: 'select-box-cascading',
        component: SelectBoxCascadingPage,
    },
    {
        path: 'select-box-grouping',
        component: SelectBoxGroupingPage,
    },
    {
        path: 'select-box-search',
        component: SelectBoxSearchPage,
    },
    
    
]