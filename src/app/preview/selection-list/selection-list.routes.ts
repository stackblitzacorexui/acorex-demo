import { Routes } from "@angular/router";
import { SelectionListCardStyle } from "./selection-list-card-style/selection-list-card-style.page";
import { SelectionListDisabledPage } from "./selection-list-disabled/selection-list-disabled.page";
import { SelectionListHorizontalPage } from "./selection-list-horizontal/selection-list-horizontal.page";
import { SelectionListMultiple } from "./selection-list-multiple/selection-list-multiple.page";
import { SelectionListReadonlyPage } from "./selection-list-readonly/selection-list-readonly.page";
import { SelectionListSeparateItemsPage } from "./selection-list-separate-items/selection-list-separate-items.page";
import { SelectionListSizePage } from "./selection-list-size/selection-list-size.page";

import { SelectionListVerticalePage } from "./selection-list-vertical/selection-list-vertical.page";

export const routes: Routes = [
    { path: '', pathMatch: "full", redirectTo: 'select-box-signle' },
    {
        path: 'selection-list-vertical',
        component: SelectionListVerticalePage,
    },
    {
        path: 'selection-list-horizontal',
        component: SelectionListHorizontalPage,
    },
    {
        path: 'selection-list-multiple',
        component: SelectionListMultiple,
    },
    {
        path: 'selection-list-separate-items',
        component: SelectionListSeparateItemsPage,
    },
    {
        path: 'selection-list-card-style',
        component: SelectionListCardStyle,
    },
    {
        path: 'selection-list-disabled',
        component: SelectionListDisabledPage,
    },
    {
        path: 'selection-list-readonly',
        component: SelectionListReadonlyPage,
    },
    {
        path: 'selection-list-size',
        component: SelectionListSizePage,
    },
    
    
]