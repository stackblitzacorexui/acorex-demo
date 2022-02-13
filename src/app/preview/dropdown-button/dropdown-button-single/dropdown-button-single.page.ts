import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-button-single',
  templateUrl: './dropdown-button-single.page.html',
})
export class DropdownButtonSinglePage {
  constructor() {}

  _handleOnItemClick(demo, e: any) {
    demo.log(`The "${e.name}" button was clicked`);
}
}
