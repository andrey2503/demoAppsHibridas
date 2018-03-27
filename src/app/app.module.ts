import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ContactoPage } from '../pages/contacto/contacto';
import { MapaPage } from '../pages/mapa/mapa';
import { GoogleMaps } from '@ionic-native/google-maps';
import { HttpClientModule } from '@angular/common/http';
import { PaisProvider } from '../providers/pais/pais';
import { UiComponentsPage } from '../pages/ui-components/ui-components';
import { BackendComponentsPage } from '../pages/backend-components/backend-components';
import { UiDetailsPage } from '../pages/ui-details/ui-details';
import { SafeHtmlPipe } from '../pipes/safe-html/safe-html';
import { BlogPage } from '../pages/blog/blog';
import { ComentariosPostPage } from '../pages/comentarios-post/comentarios-post';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ContactoPage,
    MapaPage,
    UiComponentsPage,
    BackendComponentsPage,
    UiDetailsPage,
    SafeHtmlPipe,
    BlogPage,
    ComentariosPostPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ContactoPage,
    MapaPage ,
    UiComponentsPage,
    BackendComponentsPage,
    UiDetailsPage,
    BlogPage,
    ComentariosPostPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PaisProvider
  ]
})
export class AppModule {}
