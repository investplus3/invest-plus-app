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
        description: 'Descrição 1',
        image: 'assets/img/ica-slidebox-img-1.png',
      },
      {
        title: 'Titulo 2',
        description: 'Descrição 2',
        image: 'assets/img/ica-slidebox-img-2.png',
      },
      {
        title: 'Titulo 3',
        description: 'Descrição 3',
        image: 'assets/img/ica-slidebox-img-3.png',
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