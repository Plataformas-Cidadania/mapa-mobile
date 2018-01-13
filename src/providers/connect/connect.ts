import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Network } from '@ionic-native/network';
import { AlertController, App, NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';

declare var Connection: any;

@Injectable()
export class ConnectProvider {

  constructor(protected app: App, public http: Http, public network: Network,public alertCtrl: AlertController) {
  }

  checkConnection() {
    var networkState = this.network.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    return states[networkState];
  }

  isOnline(): boolean {
    var state = this.checkConnection();
    if(state == "No network connection"){
      return false;
    } else {
      return true;
    }
  }

  showAlert(title, message, page) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      cssClass: "alert-msg",
      enableBackdropDismiss: false,
      buttons: [
      {
        text: 'OK',
        handler: () => {
          this.navCrtl().setRoot(page);
        }
      }
    ]
    });
    alert.present();
  }

  navCrtl(): NavController{
    return this.app.getRootNav();
  }
}
