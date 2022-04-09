import { Routes } from "@angular/router";
import { textareaDecorationPage } from "./textarea-decoration/textarea-decoration.page";
import { textareaRowPage } from "./textarea-row/textarea-row.page";
import { textareaUsagePage } from "./textarea-usage/textarea-usage.page";


export const routes: Routes = [
    { path: '', pathMatch: "full", redirectTo: 'textarea-usage' },
    {
        path: 'textarea-usage',
        component: textareaUsagePage,
    },
    {
        path: 'textarea-decoration',
        component: textareaDecorationPage,
    },
    {
        path: 'textarea-row',
        component: textareaRowPage,
    },
    
]