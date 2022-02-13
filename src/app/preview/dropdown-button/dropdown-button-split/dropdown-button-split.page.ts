import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown-button-split',
  templateUrl: './dropdown-button-split.page.html',
})
export class DropdownButtonSplitPage {
  constructor() {}

  _handleOnClick(demo, e: any) {
    demo.log(`The "Main" button was clicked`);
  }

  _handleOnItemClick(demo, e: any) {
    demo.log(`The "${e.name}" button was clicked`);
  }
}
