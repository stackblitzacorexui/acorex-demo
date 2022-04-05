import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DemoService } from '../../demo.service';

@Component({
  selector: 'app-select-box-grouping',
  templateUrl: './select-box-grouping.page.html',
})
export class SelectBoxGroupingPage implements OnInit {

  _names: string[];

  constructor(cdr: ChangeDetectorRef, private ds: DemoService) {
        this._names = ds.getPersonNames();
    }

  ngOnInit() {}
  _provideGroupedData = async (e: any) => {
    const states = await this.ds.getContinentList().toPromise();
    const all = await Promise.all(states.map(async continent => ({
        text: continent,
        id: continent,
        children: (await this.ds.getCountriesList(continent).toPromise()).map(c => ({
            text: c,
            id: `${continent}.${c}`,
            children: [{ id: `${continent}.${c}abc`, text: `${continent}-${c}-Item 1`},{ id: `${continent}.${c}zxc`, text: `${continent}-${c}-Item 2` }]
        }))
    })));
    return all;
}
}
