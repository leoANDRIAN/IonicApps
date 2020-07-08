import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.page.html',
  styleUrls: ['./formulaire.page.scss'],
})
export class FormulairePage implements OnInit {

  foi : string = ''
  titre : string = ''
  nom : string = ''
  qte : number = null
  unite : string = ''
  instructions : string = ''
  nbIngredients : number = 0
  listeIngredients = [] as any

  constructor(public stock: Storage) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.titre = ''
    this.nom = ''
    this.qte = null
    this.unite = ''
    this.instructions = ''
    this.nbIngredients = 0
    this.listeIngredients = []
  }

  onSeg(event) {
    this.unite = event.target.value;
  }

  addIng() {
    this.foi = '1'
    this.listeIngredients.push({nom:this.nom,qte:this.qte,unite:this.unite});
    this.nbIngredients = this.nbIngredients + 1;
  }

  disabled() {
    if (this.nbIngredients > 0 && this.titre != '' && this.instructions != '') {
      return false
    } else {
      return true
    }
  }

  envoi() {
    this.stock.set('titre', this.titre)
    this.stock.set('instructions', this.instructions)
    this.stock.set('ingredients', this.listeIngredients)
  }

  disabled2() {
    if (this.nom != '' && this.qte > 0 && this.unite != '') {
      return false
    } else {
      return true
    }
  }

}
