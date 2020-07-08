import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  listeRecettes = [] as any
  tempTitre : string = ""
  tempInstructions : string = ""
  tempIngredients = [] as any
  foi : string = ''

  constructor(public storage: Storage, private activatedRoute: ActivatedRoute) {}
  
  ngOnInit() {
    this.foi = this.activatedRoute.snapshot.paramMap.get('data')
  }

  ionViewWillEnter() {
    this.storage.get('recettes').then(data => { 
      if (data != null) {
        this.listeRecettes = data
       }
     })
     this.storage.get('titre').then(result => {
       this.tempTitre = result
     })
     this.storage.get('instructions').then(result => {
       this.tempInstructions = result
     })
     this.storage.get('ingredients').then(result => {
       this.tempIngredients = result
     })
  }

  ionViewDidEnter() {
    if (this.foi === '1') {
      this.listeRecettes.push({titre:this.tempTitre, instructions:this.tempInstructions, ingredients:this.tempIngredients})
      this.storage.set('recettes', this.listeRecettes)
    }
  }

  delete() {
    this.storage.clear()
    this.listeRecettes = []
  }

}