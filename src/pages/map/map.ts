import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GoogleMapsProvider } from '../../providers/google-maps/google-maps';


@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})

export class MapPage {

  @ViewChild('map') mapElement;

  constructor(public navCtrl: NavController, public navParams: NavParams, public maps: GoogleMapsProvider) {
  }

  ionViewDidLoad() {
    var mark = this.navParams.get("mark");
    this.maps.initialize(this.mapElement.nativeElement, mark);
  }

}
