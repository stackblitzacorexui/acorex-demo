import { Routes } from "@angular/router";
import { CheckboxUsagePage } from "./checkbox-usage/checkbox-usage.page";
import { CheckBoxWithLabelPage } from "./checkbox-with-label/checkbox-with-label.page";
import { CheckBoxWithHintPage } from "./checkbox-with-hint/checkbox-with-hint.page";
import { CheckboxReadonlyPage } from "./checkbox-readonly/checkbox-readonly.page";
import { CheckboxDisabledPage } from "./checkbox-disabled/checkbox-disabled.page";
import { CheckboxIndeterminatePage } from "./checkbox-indeterminate/checkbox-indeterminate.page";



export const routes: Routes = [
    { path: '', pathMatch: "full", redirectTo: 'calendar-usage' },
    {
        path: 'calendar-usage',
        component: CheckboxUsagePage,
    },
    {
        path: 'calendar-with-label',
        component: CheckBoxWithLabelPage,
    },
    {
        path: 'calendar-with-hint',
        component: CheckBoxWithHintPage,
    },
    {
        path: 'calendar-readonly',
        component: CheckboxReadonlyPage,
    },
    {
        path: 'calendar-disabled',
        component: CheckboxDisabledPage,
    },
    {
        path: 'calendar-indeterminate',
        component: CheckboxIndeterminatePage,
    }
]