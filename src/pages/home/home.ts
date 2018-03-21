import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactoPage } from '../contacto/contacto';
import { MapaPage } from '../mapa/mapa';
import {  UiComponentsPage } from '../ui-components/ui-components';
import { BackendComponentsPage } from '../backend-components/backend-components';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  pagina_contacto() {
    this.navCtrl.push(ContactoPage);
  }
  mapa(){
    this.navCtrl.push(MapaPage);    
  }
  UI(){
    this.navCtrl.push(UiComponentsPage);        
  }
  backEnd(){
    this.navCtrl.push(BackendComponentsPage);        
  }

}


