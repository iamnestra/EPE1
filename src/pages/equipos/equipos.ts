import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MasinfoPage } from '../masinfo/masinfo';



@IonicPage()
@Component({
  selector: 'page-equipos',
  templateUrl: 'equipos.html',
})
export class EquiposPage {

  equipos = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.equipos = [
      {
        'title': 'Universidad Católica',
        'icon': 'ios-football',
        'img': 'assets/imgs/catolica.jpg',
        'description': 'AÑO FUNDACIÓN 21 de Abril 1937',
        'description1': 'DIRECTOR TÉCNICO Beñat San José',
        'description2': 'ESTADIO San Carlos',
        'description3': 'PRESIDENTE Juan Tagle Quiroz',
        'color': '#000'
      },
      {
        'title': 'U. de Concepción',
        'icon': 'ios-football',
        'img': 'assets/imgs/udeconce.jpg',
        'description': 'AÑO FUNDACIÓN 8 de Agosto 1994',
        'description1': 'DIRECTOR TÉCNICO Francisco Bozán',
        'description2': 'ESTADIO Ester Roa',
        'description3': 'PRESIDENTE Mariano Campos Ramírez',
        'color': '#000'
      },
      {
        'title': 'Unión la Calera',
        'icon': 'ios-football',
        'img': 'assets/imgs/calera.jpg',
        'description': 'AÑO FUNDACIÓN 26 de Enero 1954',
        'description1': 'DIRECTOR TÉCNICO Víctor Rivero',
        'description2': 'ESTADIO Nicolás Chahúan',
        'description3': 'PRESIDENTE Gustavo Cerioni',
        'color': '#000'
      },
      {
        'title': 'Universidad de Chile',
        'icon': 'ios-football',
        'img': 'assets/imgs/madre.jpeg',
        'description': 'AÑO FUNDACIÓN 24 de Mayo del 1927',
        'description1': 'DIRECTOR TÉCNICO Esteban Valencia',
        'description2': 'ESTADIO(Sin Estadio)',
        'description3': 'PRESIDENTE Carlos Heller Solari',
        'color': '#000'
      },
      {
        'title': 'Deportes Antofagasta',
        'icon': 'ios-football',
        'img': 'assets/imgs/antofagasta.jpg',
        'description': 'AÑO FUNDACIÓN 14 de Mayo 1966',
        'description1': 'DIRECTOR TÉCNICO Gerardo Ameli',
        'description2': 'ESTADIO Calvo y Bascuñán',
        'description3': 'PRESIDENTE Jorge Sánchez Ilabaca',
        'color': '#000'
      },
      {
        'title': 'Colo Colo',
        'icon': 'ios-football',
        'img': 'assets/imgs/colo.jpg',
        'description': 'AÑO FUNDACIÓN 19 de abril de 1925',
        'description1': 'DIRECTOR TÉCNICO Héctor Tapia',
        'description2': 'ESTADIO Monumental',
        'description3': 'PRESIDENTE Gabriel Ruiz-Tagle',
        'color': '#000'
      },
      {
        'title': 'Unión Española',
        'icon': 'ios-football',
        'img': 'assets/imgs/ues.jpg',
        'description': 'AÑO FUNDACIÓN 18 de Mayo 1897',
        'description1': 'DIRECTOR TÉCNICO Martín Palermo',
        'description2': 'ESTADIOS anta Laura - U. Sek',
        'description3': 'PRESIDENTE Francisco Ceresuela Muñoz',
        'color': '#000'
      },
      {
        'title': 'OHiggins',
        'icon': 'ios-football',
        'description': 'A super simple way to add formatting like headers, bold, bulleted lists, and so on to plain text.',
        'color': '#000'
      },
      {
        'title': 'Palestino',
        'icon': 'ios-football',
        'description': 'The official mascot of the Linux kernel!',
        'color': '#000'
      },
      {
        'title': 'Huachipato',
        'icon': 'ios-football',
        'description': 'The official mascot of the Linux kernel!',
        'color': '#000'
      },
      {
        'title': 'Deportes Iquique',
        'icon': 'ios-football',
        'description': 'The official mascot of the Linux kernel!',
        'color': '#000'
      },
      {
        'title': 'Curicó Unido',
        'icon': 'ios-football',
        'description': 'The official mascot of the Linux kernel!',
        'color': '#000'
      },
      {
        'title': 'Deportes Temuco',
        'icon': 'ios-football',
        'description': 'The official mascot of the Linux kernel!',
        'color': '#000'
      },
      {
        'title': 'San Luis',
        'icon': 'ios-football',
        'description': 'The official mascot of the Linux kernel!',
        'color': '#000'
      },
      {
        'title': 'Audax Italiano',
        'icon': 'ios-football',
        'description': 'The official mascot of the Linux kernel!',
        'color': '#000'
      },
      {
        'title': 'Everton',
        'icon': 'ios-football',
        'description': 'The official mascot of the Linux kernel!',
        'color': '#000'
      },
    ]

  }

  openNavDetailsPage(item) {
    this.navCtrl.push(MasinfoPage, { item: item });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EquiposPage');
  }

}
