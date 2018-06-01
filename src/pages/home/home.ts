import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ContenidoPage } from '../contenido/contenido';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  segundaPage = "SegundaPage";
  constructor(public navCtrl: NavController) {

  }

goContent(){
  this.navCtrl.push(ContenidoPage);

} 
iraLogin() {
      //push another page onto the history stack
      //causing the nav controller to animate the new page in
      this.navCtrl.push(LoginPage);
    }



}
