import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the NotasSqlPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import {DbLiteControlProvider}  from '../../providers/db-lite-control/db-lite-control';
@IonicPage()
@Component({
  selector: 'page-notas-sql',
  templateUrl: 'notas-sql.html',
  providers:[DbLiteControlProvider]
})
export class NotasSqlPage {
  public notas:any;
  public nota:any;
  // constructor(public navCtrl: NavController, public navParams: NavParams) {
  constructor(public navCtrl: NavController, public navParams: NavParams,private dbsqlite:DbLiteControlProvider) {
    this.notas=[];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotasSqlPage');
    // this.cargarNotas();
    this.cargarDB();
  }

  cargarDB(){
    var estado=this.dbsqlite.cargarDB();
    this.cargarNotas();    
  }

  eliminarDatos(){
    this.dbsqlite.deleteAll();
  }

  cargarNotas(){
    
    if(this.dbsqlite.dbestado){
      this.notas = this.dbsqlite.getAll().then(notas => {
        console.log(notas);
        this.notas = notas;
      })
      .catch( error => {
        console.error( error );
      });
    }else{
   console.log("Cerrada");
    }
  }//fin de cargarNotas

  agregarNota(){
    let datos={'nota':this.nota ,estado:1};
    this.dbsqlite.create(datos);
    this.cargarNotas();
  }

  

}
