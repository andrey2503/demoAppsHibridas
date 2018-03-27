import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComentariosPostPage } from './comentarios-post';

@NgModule({
  declarations: [
    ComentariosPostPage,
  ],
  imports: [
    IonicPageModule.forChild(ComentariosPostPage),
  ],
})
export class ComentariosPostPageModule {}
