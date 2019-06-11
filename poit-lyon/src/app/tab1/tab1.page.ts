import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  public poi = [];
  public code_postal: number;

  constructor(public apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getPoi(69003)
    .subscribe((data: string[]) => {
        this.poi = data;

        console.log('test', this.poi);
    });
  }

}
