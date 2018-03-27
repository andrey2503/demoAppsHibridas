import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
    });
  }

  verNota(id){
    alert(id);
  }

  verComentarios(id){
    // alert(id);
    this.navCtrl.push(ComentariosPostPage,{id:id});
  }

  like(id){
    alert("like para "+ id);
  }

}
