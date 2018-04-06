import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  UiComponentsPage } from '../ui-components/ui-components';

/**
 * Generated class for the BlogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import { PaisProvider } from '../../providers/pais/pais';
import { ComentariosPostPage } from '../comentarios-post/comentarios-post';
@IonicPage()
@Component({
  selector: 'page-blog',
  templateUrl: 'blog.html',
  providers:[PaisProvider]
})
export class BlogPage {
  public post:any;
  public lastidpost:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public provider:PaisProvider) {
    this.post=[];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BlogPage');
    this.getPost();
  }

  getPost(){
    this.provider.getPost().subscribe(data=> {
      console.log(data);
      this.post=data;
      this.lastidpost=this.post[this.post.length - 1].id;
    });
  }

  verNota(data){
    this.navCtrl.push(UiComponentsPage,{data:data});   
  }


  verComentarios(id){
    // alert(id);
    this.navCtrl.push(ComentariosPostPage,{id:id});
  }

  like(id){
    alert("like para "+ id);
  }

  cargarMasHistorias(){
    this.provider.morepost(this.lastidpost).subscribe(data=> {
      console.log(data);
      this.post = this.post.concat(data);
      this.lastidpost=this.post[this.post.length - 1].id;
    });
  }

}
