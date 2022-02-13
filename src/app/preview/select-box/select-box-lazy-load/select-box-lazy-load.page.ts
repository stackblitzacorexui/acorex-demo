import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DemoService } from '../../demo.service';

@Component({
  selector: 'app-select-box-lazy-load',
  templateUrl: './select-box-lazy-load.page.html',
})
export class SelectBoxLazyLoadPage implements OnInit {
  constructor(cdr: ChangeDetectorRef, private ds: DemoService) {}

  ngOnInit() {}

  _provideLazyData = async (e: any) => {
    const result = await this.ds.getPagedList({ skip: e.skip, take: e.take }).toPromise();
    return {
        total: result.total,
        items: result.items
    };
}
}
