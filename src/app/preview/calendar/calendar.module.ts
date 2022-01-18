import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AXCalendarModule, AXSelectionListModule, } from '@acorex/components';
import { CalendarUsagePage } from './calendar-usage/calendar-usage.page';
import { routes } from './calendar.routes';
import { CalendarViewDepthPage } from './calendar-view-depth/calendar-view-depth.page';
import { CalendarReadonlyPage } from './calendar-readonly/calendar-readonly.page';
import { CalendarDisabledPage } from './calendar-disabled/calendar-disabled.page';
import { CalendarDateRangePage } from './calendar-date-range/calendar-date-range.page';




const MODULES: any = [
    AXCalendarModule,
    AXSelectionListModule
]

const PAGES: any = [
    CalendarUsagePage,
    CalendarViewDepthPage,
    CalendarReadonlyPage,
    CalendarDisabledPage,
    CalendarDateRangePage
]


@NgModule({
    declarations: [...PAGES],
    imports: [CommonModule, RouterModule.forChild(routes),...MODULES],
    exports: [...PAGES],
    providers: [],
})
export class CaledarModule { }