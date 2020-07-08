import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.component.html',
  styleUrls: ['./recettes.component.scss'],
})
export class RecettesComponent implements OnInit {

  @Input() titre : string
  @Input() instructions : string
  @Input() ingredients = []
  bonsoir : boolean = false

  constructor() {}

  ngOnInit() {}

  fonction() {
    if (this.bonsoir === true) {
      this.bonsoir = false
    } else {
      this.bonsoir = true
    }
  }

}
