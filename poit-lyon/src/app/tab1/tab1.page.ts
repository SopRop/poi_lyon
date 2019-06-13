import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';

import { CPoiInfo } from '../interfaces/info-poi';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  public poiInfo: CPoiInfo;
  public searchForm: FormGroup;
  public pois: any = [];
  public name: string;
  lat = 51.678418;
  lng = 7.809007;

  constructor(public apiService: ApiService, public formBuilder: FormBuilder) {
    this.searchForm = formBuilder.group({
      code_postal: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  getPoi() {
    const postalCode = this.searchForm.get('code_postal').value;
    console.log('input', postalCode);
    this.apiService.getPoi(postalCode).subscribe(
      (data: CPoiInfo) => {
        this.poiInfo = data;
        console.log('poiInfo', this.poiInfo);
        this.pois = this.poiInfo.result;
        console.log('this.pois', this.pois);
    });
  }

  transformType(value) {
    return value.split(';').join(' - ');
  }

  transformTel(value) {
    return value.match(/.{2}/g).join(' ');
  }

}
