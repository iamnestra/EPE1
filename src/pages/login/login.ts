import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import {ToastController} from  'ionic-angular';
import { UregisterPage } from '../uregister/uregister';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user : any;
  pass : any;

  constructor(public navCtrl: NavController,
    private toastCtrl: ToastController) {
  
    }


    validarUsuario(){
      if(this.user == "pablo" && this.pass == "123"){
      let user = this.user;
      let pass = this.pass;
      this.navCtrl.push(UregisterPage,{
      usuario: user,
      clave: pass
      })
      }
      else{
      let toast_bad = this.toastCtrl.create({
      message: 'DATOS INGRESADOS INCORRECTOS',
      duration:4000,
      position: 'middle'})
      toast_bad.present();
      }
      }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
