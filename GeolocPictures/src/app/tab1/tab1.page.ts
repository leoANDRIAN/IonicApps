import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { StockeurService } from '../stockeur.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private camera: Camera, private geolocation: Geolocation, public stockeur: StockeurService) {}

  capturedPicture:string
  lat:number
  lng:number
  nom:string

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((data) => {
      let base64Image = 'data:image/jpeg;base64,' + data;
      this.capturedPicture = base64Image
    })

    this.geolocation.getCurrentPosition(
      {maximumAge: 1000, timeout: 5000, enableHighAccuracy: true}
    ).then((resp) => {
      alert(JSON.stringify(resp.coords))
      this.lat = resp.coords.latitude
      this.lng = resp.coords.longitude
    })

  }

  envoiData() {
    this.stockeur.addTab(this.capturedPicture, this.nom, this.lng, this.lat)
    this.stockeur.currentLat = this.lat
    this.stockeur.currentLong = this.lng
  }

}
