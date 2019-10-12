import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-ranking',
  templateUrl: 'ranking.html',
})
export class RankingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  persons: {img:string;name:string;pontos:number}[] = [
    {
      img: '../../assets/imgs/p4.jpeg',
      name: 'Myllena',
      pontos: 234356
    },
    {
      img: '../../assets/imgs/p5.jpeg',
      name: 'Maria',
      pontos: 134356
    },
    {
      img: '../../assets/imgs/p1.jpeg',
      name: 'Evelyn',
      pontos: 124326
    },
    {
      img: '../../assets/imgs/p2.jpeg',
      name: 'Tayná',
      pontos: 4356
    },
    {
      img: '../../assets/imgs/p3.jpeg',
      name: 'Antonino',
      pontos: 356
    },
  ]

  ionViewDidLoad() {
    console.log('ionViewDidLoad RankingPage');
  }

}
