import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

/*
  Generated class for the DbLiteControlProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DbLiteControlProvider {
  public database:SQLiteObject=null;
  public dbestado:boolean=false;
  constructor(public http: HttpClient,public sqlite: SQLite) {
    console.log('Hello DbLiteControlProvider Provider');
    // this.cargarDB();
    // this.create({title:'apunte',estado:2});
  }

  cargarDB(){
     return this.sqlite.create({
       name: 'notas.db',
       location: 'default'
     })
       .then((db: SQLiteObject) => {
         this.database=db;
         this.crearTablas();
         this.dbestado=true;
         return true;
       })//fin del then
       .catch(e => console.log(e));
   }// fin de cargar DB

  crearTablas(){
  let tb= this.database.executeSql('create table if not exists Notas(nota TEXT,estado integer)', {})
          .then(() => console.log("creadas tablas en then crea tablas"))
          .catch(e => alert(e));
    
        }
  estadoDB(){
    return this.dbestado;
  }
  
  create(nota: any){
    let sql = 'INSERT INTO Notas(nota, estado) VALUES(?,?)';
    return this.database.executeSql(sql, [nota.nota, nota.estado]);
  }// fin de create
  deleteAll(){
    let sql = 'DELETE FROM Notas';
    return this.database.executeSql(sql, []);
  }

  getAll(){
    let sql = 'SELECT * FROM Notas';
    return this.database.executeSql(sql, [])
    .then(response => {
      let tasks = [];
      for (let index = 0; index < response.rows.length; index++) {
        tasks.push( response.rows.item(index) );
      }
      return Promise.resolve( tasks );
    })
    .catch(error => Promise.reject(error));
  }// fin de getAll


  update(task: any){
    let sql = 'UPDATE tasks SET title=?, completed=? WHERE id=?';
    return this.database.executeSql(sql, [task.title, task.completed, task.id]);
  }//fin de update

}
