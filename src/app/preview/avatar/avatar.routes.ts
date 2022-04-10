import { Routes } from "@angular/router";
import { AvatarAppearancePage } from "./avatar-appearance/avatar-appearance.page";
import { AvatarBadgePage } from "./avatar-badge/avatar-badge.page";
import { AvatarGroupPage } from "./avatar-group/avatar-group.page";
import { AvatarRoundPage } from "./avatar-round/avatar-round.page";
import { AvatarSizesPage } from "./avatar-sizes/avatar-sizes.page";
import { AvatarUsagePage } from "./avatar-usage/avatar-usage.page";

export const routes: Routes = [
    { path: '', pathMatch: "full", redirectTo: 'avatar-usage' },
    {
        path: 'avatar-usage',
        component: AvatarUsagePage,
    },
    {
        path: 'avatar-sizes',
        component: AvatarSizesPage,
    },
    {
        path: 'avatar-appearance',
        component: AvatarAppearancePage,
    },
    {
        path: 'avatar-round',
        component: AvatarRoundPage,
    }
    ,
    {
        path: 'avatar-group',
        component: AvatarGroupPage,
    },
    {
        path: 'avatar-badge',
        component: AvatarBadgePage,
    }

]