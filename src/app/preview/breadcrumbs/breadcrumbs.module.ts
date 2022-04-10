import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AXBreadcrumbsModule, AXButtonModule, AXEditorDecoratorModule, AXIconModule, AXLoadingModule } from '@acorex/components';
import { routes } from './breadcrumbs.routes';
import { BreadcrumbsnUsagePage } from './breadcrumbs-usage/breadcrumbs-usage.page';
import { BreadcrumbsDecorationPage } from './breadcrumbs-decoration/breadcrumbs-decoration.page';

const MODULES: any = [
AXBreadcrumbsModule,
AXEditorDecoratorModule,
AXIconModule
]

const PAGES: any = [
    BreadcrumbsnUsagePage,
    BreadcrumbsDecorationPage
]


@NgModule({
    declarations: [...PAGES],
    imports: [CommonModule, RouterModule.forChild(routes),...MODULES],
    exports: [...PAGES],
    providers: [],
})
export class BreadcrumbsnModule { }