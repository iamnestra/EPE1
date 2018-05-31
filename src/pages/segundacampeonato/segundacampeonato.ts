import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
export class SegundaPage {};

/**
 * Generated class for the SegundacampeonatoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-segundacampeonato',
  templateUrl: 'segundacampeonato.html',
})
export class SegundacampeonatoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SegundacampeonatoPage');
  }

}
