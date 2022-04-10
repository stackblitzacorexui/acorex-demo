import { Routes } from "@angular/router";
import { RadioButtonDisabledPage } from "./radio-button-disabled/radio-button-disabled.page";
import { RadioButtonWithHintPage } from "./radio-button-with-hint/radio-button-with-hint.page";
import { RadioButtonModule } from "./radio-button.module";

export const routes: Routes = [
    { path: '', pathMatch: "full", redirectTo: 'radio-button-usage' },
    {
        path: 'radio-button-usage',
        component: RadioButtonModule,
    },
    {
        path: 'radio-button-with-hint',
        component: RadioButtonWithHintPage,
    },
    {
        path: 'radio-button-disabled',
        component: RadioButtonDisabledPage,
    },

]