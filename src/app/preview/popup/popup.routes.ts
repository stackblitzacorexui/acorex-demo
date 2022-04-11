import { Routes } from "@angular/router";
import { PopUpSize } from "./popup-sizes/popup-size";


export const routes: Routes = [
    { path: '', pathMatch: "full", redirectTo: 'popup-sizes' },
    {
        path: 'popup-sizes',
        component: PopUpSize,
    }
]