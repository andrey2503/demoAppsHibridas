import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
/*
  Generated class for the PaisProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable()
export class PaisProvider {

  constructor(public http: HttpClient) {
    console.log('Hello PaisProvider Provider');
  }

  getUIComponents(){
  // console.log(this.http.get('https://api.myjson.com/bins/w076v'));
  
    // console.log(this.http.get('http://localhost/leerjson/ui.json'));
    return this.http.get('http://localhost/apiblog/public/api/uicomponentes');
    // return this.http.get('http://192.168.1.6/leerjson/ui.json');
    
  }// end to getUIComponents

  getPost(){
    // return this.http.get('52.37.219.174/api/public/api/post');  
    return this.http.get('https://owlwhite.com/api/public/api/post');  
    // return this.http.get('http://localhost/apiblog/public/api/post'); 
  }

  getComentarios(id){
    return this.http.get('https://owlwhite.com/api/public/api/comentarios/'+id);    
  }

  morepost(id){
    return this.http.get('https://owlwhite.com/api/public/api/morepost/'+id);    
  }
  
  enviarComentario(id,comentario){
   
    return this.http.post('https://owlwhite.com/api/public/api/comentario',{'id':id,'comentario':comentario}, httpOptions)
    .pipe(
      
    );
  }

}
