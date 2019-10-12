import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController) {
  }

  account: { username: string, password: string } = {
    username: 'test@example.com',
    password: 'test'
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  doLogin() {
    this.navCtrl.setRoot('HomePage');
    // Unable to log in
    // let toast = this.toastCtrl.create({
    //   message: 'Erro',
    //   duration: 3000,
    //   position: 'top'
    // });
    // toast.present();
  }

}
