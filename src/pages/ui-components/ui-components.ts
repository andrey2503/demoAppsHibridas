import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UiComponentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// import { UiDetailsPage } from '../ui-details/ui-details';
// import { PaisProvider } from '../../providers/pais/pais';
@IonicPage()
@Component({
  selector: 'page-ui-components',
  templateUrl: 'ui-components.html',
  // providers:[PaisProvider],
})

export class UiComponentsPage {
  public data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data=this.navParams.get('data');
    console.log(this.data)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UiComponentsPage');
    this.loadComponenst();
  }

  goToOtherPage() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    // this.navCtrl.push(OtherPage);
  }

  loadComponenst(){
    // console.log(this.provider.getUIComponents());
    // this.provider.getUIComponents().subscribe(data=> {
    //   console.log(data);
    //   this.lista_componentes=data;
    // });
    
  }

  showUI(component){
    // this.navCtrl.push(UiDetailsPage,{component: component});
  }

}//fin de la clase






