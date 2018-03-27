import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ComentariosPostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import { PaisProvider } from '../../providers/pais/pais';

@IonicPage()
@Component({
  selector: 'page-comentarios-post',
  templateUrl: 'comentarios-post.html',
})
export class ComentariosPostPage {
  public comentarios:any;
  public id:number;
  public comentario:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public provider:PaisProvider) {
    this.comentarios=[];
    this.id=this.navParams.get('id');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComentariosPostPage');
    this.cargarComentarios(this.id);
  }

  cargarComentarios(id){
    this.provider.getComentarios(id).subscribe(data=> {
      console.log(data);
      this.comentarios=data;
    });
  }
  enviarComentario(){
    this.provider.enviarComentario(this.id,this.comentario).subscribe(
      state => {
          console.log(state);
          if(state==1){
            this.cargarComentarios(this.id); 
            this.comentario="";           
          }else{
            console.log("error al agregar comentario");
          }
      }
  );
  }

}
