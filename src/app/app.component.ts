import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { MapPage } from '../pages/map/map';
import { IndicadoresPage } from '../pages/indicadores/indicadores';
import { EditaisPage } from '../pages/editais/editais';

var loadingPopup;

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  @ViewChild(Nav) nav: Nav;

  pages: Array<{title: string, icon: string, component: any}>;
  links: Array<{title: string, icon: string,link: any}>;

  public status: any;

  constructor(public platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public loadingCtrl: LoadingController) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();

      platform.registerBackButtonAction(() => {

        let view = this.nav.getActive();
        let currentRootPage = view.component;

        if(currentRootPage  == HomePage){
          platform.exitApp();
        }else{
          if(this.nav.canGoBack()){
            this.nav.pop();
          }else{
            this.nav.setRoot(HomePage);
          }
        }
      });
    });

    this.pages = [
      { title: 'Home', icon: 'home', component: HomePage },
      { title: 'Mapa das OSCs', icon: 'map', component: MapPage },
      { title: 'Indicadores', icon: 'stats', component: IndicadoresPage },
      { title: 'Editais para OSCs', icon: 'document', component: EditaisPage },
    ];

    this.links = [
      { title: 'Atlas do Desenvolvimento Humano no Brasil', icon: 'pin', link: 'http://atlasbrasil.org.br/2013/' },
      { title: 'Marco Regulatório das OSCs', icon: 'document', link: 'http://www.participa.br/OSC' },
      { title: 'Extrator de Dados', icon: 'archive', link: 'http://www.ipea.gov.br/extrator/' },
    ];
  }

  openPage(page) {
    loadingPopup = this.loadingCtrl.create({
      spinner: 'hide',
      content: `
      <div class="load">
        <img src="assets/img/loading.gif"/>
        <div class="load-text"> Carregando... </div>
      </div>
        `
    });

    loadingPopup.present();
    this.nav.setRoot(page.component);
    loadingPopup.dismiss();

  }

  close(){
    this.platform.exitApp();
  }
}
