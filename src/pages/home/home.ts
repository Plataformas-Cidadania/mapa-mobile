import { Component, ViewChild, Pipe, PipeTransform } from '@angular/core';
import { NavController, LoadingController, Searchbar } from 'ionic-angular';
import { MapPage } from '../map/map';
import { IndicadoresPage } from '../indicadores/indicadores';
import { EditaisPage } from '../editais/editais';
import { ServiceProvider } from '../../providers/service/service';


var loadingPopup;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  visible: string;
  keyword: string;
  select_item: boolean;

  items: string[];

  @ViewChild('searchbar') searchbar: Searchbar;

  pages: Array<{title: string,icon: string,component: any}>;
  links: Array<{title: string,icon: string,link: any}>;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public service: ServiceProvider) {

    this.pages = [
      { title: 'Mapa das OSCs', icon: 'map', component: MapPage },
      { title: 'Indicadores', icon: 'stats', component: IndicadoresPage },
      { title: 'Editais para OSCs', icon: 'document', component: EditaisPage }
    ];

    this.links = [
      { title: 'Atlas do Desenvolvimento Humano no Brasil', icon: 'pin', link: 'http://atlasbrasil.org.br/2013/' },
      { title: 'Marco Regulatório das OSCs', icon: 'document', link: 'http://www.participa.br/OSC' },
      { title: 'Extrator de Dados', icon: 'archive', link: 'http://www.ipea.gov.br/extrator/' }
    ];
  }

  documentClickHandler(){
    if(this.searchbar && !this.searchbar._elementRef.nativeElement.contains(event.target)){
      this.visible = "hidden";
    }
  }

  select(item){
    this.keyword = item;
    this.visible = "hidden";
  }

  getItems(ev: any) {

    if(this.keyword.length>=3){
      this.visible = "";
      this.service.getAutoComplete(this.keyword).map(res => res.json()).subscribe(
        data => {
          if(data == null){
            this.items = [];
          }else{
            this.items = data;
          }
      });
    }else{
      this.items = [];
    }
  }

  getOsc(){
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

    var busca = this.keyword;
    if(busca == null || busca == ''){
      this.navCtrl.setRoot(MapPage);
      loadingPopup.dismiss();
    }else{
      var value = busca.replace(/ /g, '_').replace(/[\/|\\|\||:|#|@|$|&|!|?|(|)|\[|\]]/g, '').replace(/\./g, ',');//replace(/ /g, "+");
      this.service.getSearchGeo(value).map(res => res.json()).subscribe(data => {
          this.navCtrl.push(MapPage, {mark: data});
          loadingPopup.dismiss();
      });
    }
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
    this.navCtrl.setRoot(page.component);
    loadingPopup.dismiss();
  }

}

@Pipe({ name: 'boldprefix' })

export class BoldPrefix implements PipeTransform {
  transform(value, keyword): any {
    if (!keyword)
            return value;
        var /** @type {?} */ escaped_keyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        return value.replace(new RegExp(escaped_keyword, 'gi'), function (str) { return str.bold(); });
  }
}
