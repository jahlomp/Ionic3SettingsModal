import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
  }

  openSettings() {
    this.modalCtrl.create('SettingsPage').present();
  }

}
