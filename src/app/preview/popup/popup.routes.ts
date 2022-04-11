import { Routes } from "@angular/router";
import { PopUpSize } from "./popup-sizes/popup-size";


export const routes: Routes = [
    { path: '', pathMatch: "full", redirectTo: 'popup-size' },
    {
        path: 'popup-size',
        component: PopUpSize,
    }
]