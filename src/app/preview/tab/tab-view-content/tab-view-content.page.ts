import { AXTabStripChangedEvent } from '@acorex/components';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DemoService } from '../../demo.service';
@Component({
  selector: 'app-tab-view-content',
  templateUrl: './tab-view-content.page.html',
})
export class TabViewContentPage {
  constructor(cdr: ChangeDetectorRef, private ds: DemoService) {
  }
  _handleActiveTabChanged(demo, e: AXTabStripChangedEvent) {
    demo.log(`"${e.tab.text}" selected`);    
  } 
}
