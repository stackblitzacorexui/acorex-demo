import { Routes } from "@angular/router";
import { CheckboxUsagePage } from "./checkbox-usage/checkbox-usage.page";
import { CheckBoxWithLabelPage } from "./checkbox-with-label/checkbox-with-label.page";
import { CheckBoxWithHintPage } from "./checkbox-with-hint/checkbox-with-hint.page";
import { CheckboxReadonlyPage } from "./checkbox-readonly/checkbox-readonly.page";
import { CheckboxDisabledPage } from "./checkbox-disabled/checkbox-disabled.page";
import { CheckboxIndeterminatePage } from "./checkbox-indeterminate/checkbox-indeterminate.page";
import { CheckboxValidationPage } from "./checkbox-validation/checkbox-validation.page";



export const routes: Routes = [
    { path: '', pathMatch: "full", redirectTo: 'calendar-usage' },
    {
        path: 'checkbox-usage',
        component: CheckboxUsagePage,
    },
    {
        path: 'checkbox-with-label',
        component: CheckBoxWithLabelPage,
    },
    {
        path: 'checkbox-with-hint',
        component: CheckBoxWithHintPage,
    },
    {
        path: 'checkbox-readonly',
        component: CheckboxReadonlyPage,
    },
    {
        path: 'checkbox-disabled',
        component: CheckboxDisabledPage,
    },
    {
        path: 'checkbox-indeterminate',
        component: CheckboxIndeterminatePage,
    },
    {
        path: 'checkbox-validation',
        component: CheckboxValidationPage,
    }
]