import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
export class CuartaPage {};

/**
 * Generated class for the CitacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-citacion',
  templateUrl: 'citacion.html',
})
export class CitacionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CitacionPage');
  }

}
