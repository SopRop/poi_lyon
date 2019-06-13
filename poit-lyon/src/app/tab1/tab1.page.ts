import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Map, latLng, tileLayer, Layer, marker } from 'leaflet';

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
  public map: Map;
  public lat = 45.750000;
  public lng = 4.850000;

  // options = {
  //   layers: [
  //     tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
  //   ],
  //   zoom: 5,
  //   center: latLng(46.879966, -121.726909)
  // };

  constructor(public apiService: ApiService, public formBuilder: FormBuilder) {
    this.searchForm = formBuilder.group({
      code_postal: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.loadmap();
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

  loadmap() {
    setTimeout(() => {
      this.map = new Map('map').setView([this.lat, this.lng], 8);

      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
         // tslint:disable-next-line
        maxZoom: 18
      }).addTo(this.map);

    }, 50);
  }

  transformType(value) {
    return value.split(';').join(' - ');
  }

  transformTel(value) {
    return value.match(/.{2}/g).join(' ');
  }

}
