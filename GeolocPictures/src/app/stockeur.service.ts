import { Injectable } from '@angular/core';

@Injectable()
export class StockeurService {

  constructor() { }

  tab = [] as any
  currentLat: number
  currentLong: number

  addTab(photo: string, nom: string, long: number, lat: number) {
    this.tab.push({photo:photo, nom:nom, long:long, lat:lat})
  }

  getTab() {
    return this.tab
  }

}