import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  username:any;
  password:any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public firebaseauth: AngularFireAuth)  {

  }


  public LoginComEmail(): void {
    this.firebaseauth.auth.signInWithEmailAndPassword(this.username.value , this.password.value)
      .then(() => {
        this.exibirToast('Login efetuado com sucesso');
      })
      .catch((erro: any) => {
        this.exibirToast(erro);
      });
  }

  public cadastrarUsuario(): void {
    this.firebaseauth.auth.createUserWithEmailAndPassword(this.username.value , this.password.value)
    .then(() => {
      this.exibirToast('Usuário criado com sucesso');
    })
    .catch((erro: any) => {
      this.exibirToast(erro);
    });
  }

  public Logoff(): void {
    this.firebaseauth.auth.signOut()
    .then(() => {
      this.exibirToast('Você saiu');
    })
    .catch((erro: any) => {
      this.exibirToast(erro);
    });
  }

  private exibirToast(mensagem: string): void {
    let toast = this.toastCtrl.create({duration: 3000,
                                      position: 'botton'});
    toast.setMessage(mensagem);
    toast.present();
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
