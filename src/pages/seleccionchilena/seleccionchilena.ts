import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
export class TerceraPage {};

/**
 * Generated class for the SeleccionchilenaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seleccionchilena',
  templateUrl: 'seleccionchilena.html',
})
export class SeleccionchilenaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeleccionchilenaPage');
  }

}
