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
        'description': 'The latest version of the web\'s markup language.',
        'color': '#000'
      },
      {
        'title': 'Universidad de Chile',
        'icon': 'ios-football',
        'description': 'One of the most popular programming languages on the Web!',
        'color': '#000'
      },
      {
        'title': 'Deportes Antofagasta',
        'icon': 'ios-football',
        'description': 'Syntactically Awesome Stylesheets - a mature, stable, and powerful professional grade CSS extension.',
        'color': '#000'
      },
      {
        'title': 'Colo Colo',
        'icon': 'ios-football',
        'description': 'An open-source, cross-platform runtime environment for developing server-side Web applications.',
        'color': '#000'
      },
      {
        'title': 'Unión Española',
        'icon': 'ios-football',
        'description': 'A clear and powerful object-oriented programming language!',
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
