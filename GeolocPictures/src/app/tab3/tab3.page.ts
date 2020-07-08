import { Component } from '@angular/core';
import { Map,tileLayer,marker, Marker } from 'leaflet';
import { StockeurService } from '../stockeur.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  map:Map
  //marker:Marker
  tab = [] as any

  constructor(public stockeur: StockeurService) {}

  ionViewDidEnter() {
    this.map = new Map("map").setView([this.stockeur.currentLat,this.stockeur.currentLong], 5);
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY- SA</a>'}).addTo(this.map)
    this.stockeur.tab.forEach(element => {
      marker([element.lat, element.long], {draggable: false, title: element.nom}).addTo(this.map)
    });
  }

}