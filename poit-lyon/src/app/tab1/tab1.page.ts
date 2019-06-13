import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Map, latLng, tileLayer, Layer, Marker, marker, layerGroup } from 'leaflet';

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
  public layerG: any;

  constructor(public apiService: ApiService, public formBuilder: FormBuilder) {
    this.searchForm = formBuilder.group({
      code_postal: ['', Validators.required]
    });
  }

  ngOnInit() {

    setTimeout(() => {
      this.map = new Map('map').setView([this.lat, this.lng], 12);

      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
      }).addTo(this.map);
    }, 50);
  }

  getPoi() {
    const postalCode = this.searchForm.get('code_postal').value;
    this.apiService.getPoi(postalCode).subscribe(
      (data: CPoiInfo) => {
        this.poiInfo = data;
        this.pois = this.poiInfo.result;
        console.log('mark', this.pois)
    });
  }

  transformType(value) {
    return value.split(';').join(' - ');
  }

  transformTel(value) {
    return value.match(/.{2}/g).join(' ');
  }

  getCoordinates(lat, lon) {
    console.log('coorlat', lon);
    console.log('coorlon', lat);

    if (this.layerG) { this.layerG.clearLayers(); }

    this.layerG = layerGroup().addTo(this.map);

    marker([lon, lat]).addTo(this.layerG);

    this.map.flyTo([lon, lat], 15);
  }

}
