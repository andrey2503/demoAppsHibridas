import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UiDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-ui-details',
  templateUrl: 'ui-details.html',
})

export class UiDetailsPage{
  public lista_componentes:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.lista_componentes=[];
    this.lista_componentes=this.navParams.get('component');
    console.log(this.navParams.get('component'));
    
  }
 

  ionViewDidLoad() {
    console.log('ionViewDidLoad UiDetailsPage');
  }
  getComponent(){
    return this.lista_componentes;
  }

}
