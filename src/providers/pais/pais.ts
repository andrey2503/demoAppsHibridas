import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PaisProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PaisProvider {

  constructor(public http: HttpClient) {
    console.log('Hello PaisProvider Provider');
  }

  getUIComponents(){
  // console.log(this.http.get('https://api.myjson.com/bins/w076v'));
  
    // console.log(this.http.get('http://localhost/leerjson/ui.json'));
    return this.http.get('http://localhost/apirest/public/api/uicomponentes');
    // return this.http.get('http://192.168.1.6/leerjson/ui.json');
    
  }// end to getUIComponents

}
