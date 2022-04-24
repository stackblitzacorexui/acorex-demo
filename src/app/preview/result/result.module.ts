import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {  AXAlertModule, AXBadgeModule, AXButtonModule, AXDecoratorPrefixComponent, AXEditorDecoratorModule, AXFormModule, AXIconModule, AXInputMaskModule, AXLabelModule, AXLoadingModule, AXResultModule, AXSelectBoxModule, AXSelectionListModule, AXSwitchModule, AXTabsModule, AXTextareaModule, AXTextBoxModule, AXTimeBoxModule } from '@acorex/components';
import { routes } from './result.routes';
import { ResultUsagePage } from './result-usage/result-usage.page';
import { ResultWarningStatusPage } from './result-warning-status/result-warning-status.page';
import { ResultDangerStatusPage } from './result-danger-status/result-danger-status.page';
import { Result400Page } from './result-400/result-400.page';
import { Result403Page } from './result-403/result-403.page';
import { Result500Page } from './result-500/result-500.page';
import { ResultCustomIconPage } from './result-custom-icon/result-custom-icon.page';
import { ResultCustomImagePage } from './result-custom-image/result-custom-image.page';


const MODULES: any = [
    AXResultModule,
    AXButtonModule,
    AXIconModule,
    AXEditorDecoratorModule,
    AXAlertModule

]
const PAGES: any = [
ResultUsagePage,
ResultWarningStatusPage,
ResultDangerStatusPage,
Result400Page,
Result403Page,
Result500Page,
ResultCustomIconPage,
ResultCustomImagePage
]

@NgModule({
    declarations: [...PAGES],
    imports: [CommonModule, RouterModule.forChild(routes),...MODULES],
    exports: [...PAGES],
    providers: [],
})
export class ResultModule { }