import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, Platform } from 'ionic-angular';


export interface Slide {
  title: string;
  description: string;
  image: string;
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
        title: 'Titulo 1',
        description: 'Aplique sua grana de forma confiável ;)',
        image: 'assets/imgs/tutorial2_1.png',
      },
      {
        title: 'Titulo 2',
        description: 'Quer ter um retorno financeiro de forma massa e divertida?',
        image: 'assets/imgs/tutorial_2.png',
      },
      {
        title: 'Titulo 3',
        description: 'Embarque nesse rolê com a Invest+',
        image: 'assets/imgs/tutorial_3.png',
      }
    ];
  }

  startApp() {
    this.navCtrl.setRoot('ProfilePage', {}, {
      animate: true,
      direction: 'forward'
    });
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd();
  }

}
