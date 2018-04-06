import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactoPage } from '../contacto/contacto';
import { MapaPage } from '../mapa/mapa';
import { BackendComponentsPage } from '../backend-components/backend-components';
import { BlogPage } from '../blog/blog';
import { NotasSqlPage } from '../notas-sql/notas-sql';
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
         
  }
  backEnd(){
    this.navCtrl.push(BackendComponentsPage);        
  }
  blog(){
    this.navCtrl.push(BlogPage);
  }
  notasSQL(){
    this.navCtrl.push(NotasSqlPage);
  }

}


