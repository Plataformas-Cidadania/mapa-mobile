import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { ConnectProvider } from '../../providers/connect/connect';
import { HomePage } from '../../pages/home/home';


var ativos = [];
var encerrados = [];

@Component({
  selector: 'page-editais',
  templateUrl: 'editais.html',
})
export class EditaisPage {

  itens = [];

  editais_ativos: any = [];
  editais_encerrados: any = [];

  conect: boolean = true;

  constructor(public navCtrl: NavController, public service: ServiceProvider, public connect: ConnectProvider) {

    //Para teste local e no emulador
    if(this.conect){

    //if(this.connect.isOnline()){
      service.getEditais().map(res => res.json()).subscribe(
        data => {
            this.itens = data;
            ativos.push(data.ativos);
            encerrados.push(data.encerrados);
            this.item();
          }
      )
    }
    else {
      this.connect.showAlert("ERRO", "Erro ao carregar, verifique sua conexão!", HomePage);
    }
  }

  item(){
    for(var i in ativos[0]){
      this.editais_ativos.push({expanded: false, title: ativos[0][i].tx_orgao});
    }
    for(var j in encerrados[0]){
      this.editais_encerrados.push({expanded: false, title: encerrados[0][j].tx_orgao});
    }
  }

  expandItem(item){
    item.expanded = !item.expanded;
  }
}
