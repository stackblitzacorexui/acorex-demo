import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DemoService } from '../../demo.service';

@Component({
  selector: 'app-select-box-cascading',
  templateUrl: './select-box-cascading.page.html',
})
export class SelectBoxCascadingPage implements OnInit {

  _names: string[];
_selectedContinent: string = null;

  constructor(cdr: ChangeDetectorRef, private ds: DemoService) {
        this._names = ds.getPersonNames();
    }
    _provideContinentData = async (e: any) => {
      return await this.ds.getContinentList().toPromise();
  }
  _provideCountryData = async (e: any) => {
    return await this.ds.getCountriesList(this._selectedContinent).toPromise();
}
  ngOnInit() {}
}
