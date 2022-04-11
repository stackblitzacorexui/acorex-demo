import { AXClickEvent, AXMenuItems, AXToastService, AX_TIME_FORMAT } from '@acorex/components';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DemoService } from '../../demo.service';
@Component({
  selector: 'app-menu-usage',
  templateUrl: './menu-usage.page.html',
})
export class MenuUsagePage implements OnInit {
  constructor(private cdr: ChangeDetectorRef, private ds: DemoService) {}
  ngOnInit() {}
  menuItem: AXMenuItems[] = [
    {
      name: 'Home',
      text: 'Home',
      tooltip: 'Home',
    },
    {
      id: '10',
      name: 'menu-item',
      text: 'MenuItem',
      tooltip: 'MenuItem',
      children: [{ name: 'sub-menu', text: 'SubMenu1', tooltip: 'SubMenu', parentId: '10' }, { id: '20', name: 'sub-menu', text: 'SubMenu2', tooltip: 'SubMenu', children: [{ name: 'sub-menu', text: 'SubMenu2-1', tooltip: 'SubMenu', parentId: '20' }] }],
    },
  ]
  onMenuItemClick(e) {
  }
}
