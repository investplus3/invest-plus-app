import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, Platform } from 'ionic-angular';


export interface Slide {
  title: string;
  description: string;
  img: string;
}

@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {
  slides: Slide[];
  showSkip = true;

  constructor(public navCtrl: NavController, public menu: MenuController, public platform: Platform) {
    this.slides = [
      {
        title: 'Investimento não era sua praia <br> Até agora',
        description: 'Aplique sua grana de forma confiável ;)',
        img:'../assets/imgs/iphone.jpg'
      },
      {
        title: 'Titulo 2',
        description: 'Quer ter um retorno financeiro de forma massa e divertida?',
        img:'../../assets/imgs/iphone.jpg'
      },
      {
        title: 'Titulo 3',
        description: 'Embarque nesse rolê com a Invest+',
        img:'../../assets/imgs/iphone.jpg'
      }
    ];
  }

  startApp() {
    this.navCtrl.setRoot('LoginPage', {}, {
      animate: true,
      direction: 'forward'
    });
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd();
  }

}