import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  @ViewChild('slides') slides: Slides;
  profiles: { label: string; type: string; placeholder: string; value: string }[] = [
    {
      label: 'E aí, qual o seu nome?',
      type: 'text',
      placeholder: 'Seu nome completo',
      value: ''
    },
    {
      label: `Myllena, me diz agora tua data de nascimento.`,
      type: 'month',
      placeholder: 'DD/MM/AAAA',
      value: ''
    },
    {
      label: `Conta aí, Myllena, qual é a tua meta?`,
      type: 'text',
      placeholder: 'Digite aqui..',
      value: ''
    },
    {
      label: `Massa, vamos te ajudar nisso! Qual é o valor que queres alcançar?`,
      type: 'text',
      placeholder: 'Digite aqui..',
      value: ''
    },
    {
      label: `Já ta acabando tá?! Qual teu e-mail?`,
      type: 'text',
      placeholder: 'Digite seu e-mail',
      value: ''
    },
    {
      label: `Pra finalizar, a senha super secreta`,
      type: 'password',
      placeholder: 'Digite sua senha',
      value: ''
    },
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  nextSlide() {
    this.slides.slideNext();
    if (this.slides._activeIndex == 5) {
      this.navCtrl.setRoot('HomePage');
    }
  }

  prevSlide() {
    this.slides.slidePrev();
  }

}
