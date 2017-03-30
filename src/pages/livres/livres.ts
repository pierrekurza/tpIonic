import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {IBookData} from "../../providers/i-book-data";

/*
  Generated class for the Livres page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-livres',
  templateUrl: 'livres.html'
})
export class LivresPage {
  livres: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private iBookData: IBookData) {
      iBookData.getLocalData().subscribe(data => {
          this.livres = data;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LivresPage');
  }

}
