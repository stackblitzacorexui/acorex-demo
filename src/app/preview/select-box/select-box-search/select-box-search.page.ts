import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DemoService } from '../../demo.service';
import { AXDataListQuery } from '@acorex/components';

@Component({
  selector: 'app-select-box-search',
  templateUrl: './select-box-search.page.html',
})
export class SelectBoxSearchPage implements OnInit {

  _names: string[];

  constructor(cdr: ChangeDetectorRef, private ds: DemoService) {
        this._names = ds.getPersonNames();
    }

  ngOnInit() {}
  _provideSearchData = async (e: AXDataListQuery) => {
    return (await this.ds.getCountriesList('all').toPromise()).filter(c => !e.searchQuery || c.toLowerCase().includes(e.searchQuery.toLowerCase()));
}
}
