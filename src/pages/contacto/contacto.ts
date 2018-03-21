import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , AlertController } from 'ionic-angular';

/**
 * Generated class for the ContactoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contacto',
  templateUrl: 'contacto.html',
})
export class ContactoPage {

  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams,
      public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactoPage');
  }

  enviar(){
  	let alert= this.alertCtrl.create({
      title: 'Contacto',
      subTitle: 'Tu mensaje ha sido enviado correctamente',
      buttons: ['OK']
    });
  	alert.present();
  }

}
