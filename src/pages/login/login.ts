import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  username: any;
  password: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public firebaseauth: AngularFireAuth) {

  }

  public login(): void {
    this.firebaseauth.auth.signInWithEmailAndPassword(this.username, this.password)
      .then(() => {
        this.viewToast('Login efetuado com sucesso');
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

  public register(): void {
    this.firebaseauth.auth.createUserWithEmailAndPassword(this.username, this.password)
      .then(() => {
        this.viewToast('Usuário criado com sucesso');
        // this.navCtrl.setRoot('HomePage');
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
