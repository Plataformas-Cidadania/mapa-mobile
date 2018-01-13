import { Component, Pipe, PipeTransform } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { LOCALE_ID } from '@angular/core';


var loadingPopup;
var osc_item = [];

@Component({
  selector: 'page-osc',
  templateUrl: 'osc.html',
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}]
})
export class OscPage {

  osc:any[];
  itens: any = [];
  info_rec_prop: any = [];
  info_rec_pub: any = [];
  info_rec_priv: any = [];
  info_rec_nFin: any = [];
  item_projetos: any = [];
  item_recursos: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, public loadingCtrl: LoadingController, public service: ServiceProvider) {
    this.itens = [
      {expanded: false, title: "Dados Gerais"},
      {expanded: false, title: "Áreas e Subáreas de Atuação da OSC"},
      {expanded: false, title: "Descrição da OSC"},
      {expanded: false, title: "Titulações e Certificações"},
      {expanded: false, title: "Relações de Trabalho e Governança"},
      {expanded: false, title: "Espaços de Participação Social"},
      {expanded: false, title: "Projetos, atividades e/ou programas"},
      {expanded: false, title: "Fontes de recursos anuais da OSC"}
    ];

    this.info_rec_prop = [
      {title: "Fundos patrimoniais são estruturas que oferecem sustentabilidade financeira a uma organização sem fins lucrativos."},
      {title: "Os fundos de reserva são frequentemente usados pelas organizações no atendimento emergencial de despesas ordinárias do dia a dia da entidade."},
      {title: "Contribuição financeira para a sustentabilidade da organização, seja periodicamente (por meio de mensalidades ou anuidades, por exemplo) ou de outro modo."},
      {title: "Prêmios recebidos na forma de bens ou valores monetários pela OSC como reconhecimento de quaisquer méritos da organização."},
      {title: "Esta é uma das formas de captação mais utilizadas pelas organizações, já que os produtos podem ser confeccionados pela própria instituição."},
      {title: "Atividades realizadas por uma organização com o fim de atendimento do beneficiário de ações sociais pode retornar dividendos para a entidade."},
      {title: "Cessão onerosa da marca associada a uma organização civil para empresas privadas que, em troca, pagam royalties ou direitos autorais."}
    ];

    this.info_rec_pub = [
      {title: "As parcerias voluntárias entre a administração pública do nível federal e as organizações civis."},
      {title: "As parcerias voluntárias entre a administração pública do nível estadual e as organizações civis."},
      {title: "As parcerias voluntárias entre a administração pública do nível municipal e as organizações civis."},
      {title: "Acordos de cooperação podem ser firmados com organizações multilaterais em diversos campos de atividades, não havendo nenhum tipo de repasse financeiro. Exemplos de organizações multilaterais são as Nações Unidas, o Banco Mundial e o Banco Interamericano de Desenvolvimento."},
      {title: "Acordos de cooperação podem ser firmados com governos estrangeiros em diversos campos de atividades, não havendo nenhum tipo de repasse financeiro."},
      {title: "Empresa pública é pessoa jurídica de direito privado, constituída por capital exclusivamente público e podendo ser constituída em qualquer uma das modalidades empresariais. Sociedade de economia mista é pessoa jurídica de direito privado, constituída por capital público e privado. A parte do capital público deve ser maior, pois a maioria das ações deve estar sob o controle do Poder Público."}
    ];

    this.info_rec_priv = [
      {title: "As diferentes formas de parcerias formais ou informais com outras OSCs (fundações privadas ou associações privadas) brasileiras, com a exceção de organizações religiosas."},
      {title: "As diferentes formas de parcerias formais ou informais com outras OSCs (fundações privadas ou associações privadas) estrangeiras, com a exceção de organizações religiosas."},
      {title: "As diferentes formas de parcerias formais ou informais com OSCs que sejam organizações religiosas brasileiras."},
      {title: "As diferentes formas de parcerias formais ou informais com OSCs que sejam organizações religiosas estrangeiras."},
      {title: "As diferentes formas de parcerias com empresas privadas brasileiras por meio das quais as empresas cedem os recursos necessários (físicos, financeiros e/ou humanos) para a execução de um determinado projeto."},
      {title: "As diferentes formas de parcerias com empresas privadas estrangeiras por meio das quais as empresas cedem os recursos necessários (físicos, financeiros e/ou humanos) para a execução de um determinado projeto."},
      {title: "Doações recebidas de empresas, associações, órgãos públicos, igrejas ou outros tipos de organizações."},
      {title: "Doações recebidas de indivíduos."},
      {title: "As doações recebidas pela OSC na forma de produtos ou serviços com nota fiscal podem ser contabilizadas pelo valor da nota fiscal."}
    ];

    this.info_rec_nFin = [
      {title: "O voluntário é o indivíduo que dedica parte de seu tempo à realização de atividades não remuneradas de diversos tipos."},
      {title: "A isenção fiscal é a dispensa de tributo por meio de lei realizada pelo ente federativo competente para institui-lo."},
      {title: "A imunidade é uma limitação constitucional ao poder de tributar, ou seja, nega ao Estado o poder de tributar pessoas ou organizações definidas como imunes."},
      {title: "Bens cedidos por um doador a um donatário, de modo que este fica obrigado a manter e cuidar dos bens doados, sem que tenha, no entanto, direito pleno ao bem, mas apenas direito de uso em relação a ele."},
      {title: "Doações recebidas pela OSC na forma de produtos ou serviços sem nota fiscal."}
    ];

    var id_osc = navParams.get("id_osc");
    this.getOsc(id_osc);
  }

  getOsc(id_osc){
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

    this.service.getOsc(id_osc).map(res => res.json()).subscribe(
      data => {
        this.osc = data;
        osc_item = [];
        this.item_projetos = [];
        this.item_recursos = [];
        osc_item.push(data);
        this.item();
        loadingPopup.dismiss();
      },
      err => console.log(err)
    );
  }

  item(){
    if(osc_item[0].projeto != null){
      var proj = osc_item[0].projeto.projeto;
      for(var i in proj){
        this.item_projetos.push({expanded: false, title: proj[i].tx_nome_projeto});
      }
    }

    if(osc_item[0].recursos != null){
      var rec = osc_item[0].recursos.recursos;
      for(var j in rec){
        this.item_recursos.push({expanded: false, title: rec[j].dt_ano_recursos_osc});
      }
    }
  }

  expandItem(item){
    item.expanded = !item.expanded;
  }

  presentAlert(type, font) {
    var fonte_dados = '';
    if(type == "Fonte"){
      if(font != null){
          if(font != 'Representante' && font != null){
            fonte_dados = 'Informação oficial ' + font;
          }else{
            if(font == 'Representante'){
              fonte_dados = 'Informação preenchida pela Organização';
            }
          }
        let alert = this.alertCtrl.create({
          title: 'Fonte de Dados',
          subTitle: fonte_dados,
          buttons: ['OK']
        });
        alert.present();
      }
    }else{
      if(type == "Info"){
        if(font != null){
          let alert = this.alertCtrl.create({
            title: 'Informações',
            subTitle: font,
            buttons: ['OK']
          });
          alert.present();
        }
      }
    }
  }
}

@Pipe({ name: 'unique' })

export class UniquePipe implements PipeTransform {
  transform(items = [], keyname: string): any {
    var output = [],
          keys = [];

    for(let i of items){
      var key = items[keyname];
      if(keys.indexOf(key) === -1) {
              keys.push(key);
              output.push(i);
          }
    }
    return output;
  }
}

@Pipe({ name: 'tel' })

export class TelPipe implements PipeTransform {
  transform(input): any {
    if(input !== null && input !== undefined  && input !== ""){
	  	var str = input+ '';
	    str = str.replace(/\D/g,'');
			if(str.length === 11 ){
				if(+str.substring(0,1) === 0){
					str=str.replace(/^(\d{4})(\d{3})(\d{4})/,'$1-$2-$3');
				}
				else{
					  str=str.replace(/^(\d{2})(\d{5})(\d{4})/,'($1) $2-$3');
				}
	    }
			else if(str.length === 10){
	    	str=str.replace(/^(\d{2})(\d{4})(\d{4})/,'($1) $2-$3');
	    }
			else if(str.length === 9){
	    	str=str.replace(/^(\d{0})(\d{5})(\d{4})/,'($1) $2-$3');
	    }
			else if(str.length === 8){
	        str=str.replace(/^(\d{0})(\d{4})(\d{4})/,'($1) $2-$3');
	    }
	    return str;
		}
		return "Não informado";
  }
}
