import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ServiceProvider {

  api_osc:string = 'https://mapaosc-desenv.ipea.gov.br:8383/api/osc/'
  api_search_geo = 'https://mapaosc-desenv.ipea.gov.br:8383/api/search/osc/geo/'
  api_editais = 'https://mapaosc-desenv.ipea.gov.br:8383/api/edital'
  api_autocomplete = 'https://mapaosc-desenv.ipea.gov.br:8383/api/search/osc/autocomplete/'

  constructor(public http: Http) {
  }

  getOsc(id_osc){
    return this.http.get(this.api_osc+id_osc);
  }

  getSearchGeo(value){
    return this.http.get(this.api_search_geo+value+'/0/0/0');
  }

  getEditais(){
    return this.http.get(this.api_editais);
  }

  getAutoComplete(keyword){
    var value = this.replaceSpecialChars(keyword).replace(/ /g, '_').replace(/[\/|\\|\||:|#|@|$|&|!|?|(|)|\[|\]]/g, '').replace(/\./g, ','); //keyword.replace(/ /g, "+");
    var str = this.replaceSpecialChars(value);
    return this.http.get(this.api_autocomplete+str+"/10/0/0");
  }

  replaceSpecialChars(str){
    str = str.replace(/[ÀÁÂÃÄÅ]/g,"A");
    str = str.replace(/[àáâãäå]/g,"a");
    str = str.replace(/[ÉÈÊË]/g,"E");
    str = str.replace(/[éèêë]/g,"e");
    str = str.replace(/[ÍÌÎÏ]/g,"I");
    str = str.replace(/[íìîï]/g,"i");
    str = str.replace(/[ÓÒÔÕ]/g,"O");
    str = str.replace(/[óòôõ]/g,"o");
    str = str.replace(/[ÚÙÛÜ]/g,"U");
    str = str.replace(/[úùûü]/g,"u");
    str = str.replace(/[Ç]/g,"C");
    str = str.replace(/[ç]/g,"c");
    return str;
  }

}
