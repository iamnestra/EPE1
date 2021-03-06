import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { EquiposPage } from '../equipos/equipos';
import { AjustesPage } from '../ajustes/ajustes';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = EquiposPage;
  tab3Root = AboutPage;
  tab4Root = ContactPage;
  tab5Root = AjustesPage;
  constructor() {

  }
}
