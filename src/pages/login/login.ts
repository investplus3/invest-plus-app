import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public username: string;
  public password: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public firebaseauth: AngularFireAuth) {

  }


  public loginWithEmail(): void {
    this.firebaseauth.auth.signInWithEmailAndPassword(this.username, this.password)
      .then(() => {
        this.navCtrl.setRoot('HomePage');
      })
      .catch((erro: any) => {
        this.viewToast(erro);
      });
  }

  public userRegister(): void {
    this.firebaseauth.auth.createUserWithEmailAndPassword(this.username, this.password)
      .then(() => {
        this.viewToast('Usuário criado com sucesso');
        // this.navCtrl.setRoot('HomePage');
      })
      .catch((erro: any) => {
        this.viewToast(erro);
      });
  }

  public logout(): void {
    this.firebaseauth.auth.signOut()
      .then(() => {
        this.viewToast('Você saiu');
      })
      .catch((erro: any) => {
        this.viewToast(erro);
      });
  }

  private viewToast(mensagem: string): void {
    let toast = this.toastCtrl.create({
      duration: 3000,
      position: 'botton'
    });
    toast.setMessage(mensagem);
    toast.present();
  }

  account: { username: string, password: string } = {
    username: '',
    password: ''
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
