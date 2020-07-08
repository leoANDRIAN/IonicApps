import { Component } from '@angular/core';
import { StockeurService } from '../stockeur.service';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  tab = [] as any

  constructor(public stockeur: StockeurService, private mailComp: EmailComposer) {}

  ionViewWillEnter() {
    this.tab = this.stockeur.getTab()
  }

  sendEmail(long: number, lat: number, title: string) {

    console.log("press")

    let email = {
      to: 'leo.andriantsizafy@u-psud.fr',
      cc: '',
      bcc: '',
      attachments: [],
      subject: title,
      body:'latitude : ' + lat + ' | longitude : ' + long,
      isHtml: false
    }
    this.mailComp.open(email)
  }

}