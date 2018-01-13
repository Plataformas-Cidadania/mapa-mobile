import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage, BoldPrefix } from '../pages/home/home';
import { MapPage } from '../pages/map/map';
import { OscPage, UniquePipe, TelPipe } from '../pages/osc/osc';
import { IndicadoresPage } from '../pages/indicadores/indicadores';
import { EditaisPage } from '../pages/editais/editais';

import { ServiceProvider } from '../providers/service/service';
import { GoogleMapsProvider } from '../providers/google-maps/google-maps';

import { HttpModule } from "@angular/http";

import { ExpandableComponent } from '../components/expandable/expandable';
import { ConnectProvider } from '../providers/connect/connect';
import { Network } from '@ionic-native/network';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BoldPrefix,
    MapPage,
    OscPage,
    UniquePipe,
    TelPipe,
    IndicadoresPage,
    EditaisPage,
    ExpandableComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MapPage,
    OscPage,
    IndicadoresPage,
    EditaisPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceProvider,
    GoogleMapsProvider,
    ConnectProvider,
    Network
  ]
})
export class AppModule {}
