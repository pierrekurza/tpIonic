import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Courses page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-courses',
  templateUrl: 'courses.html'
})
export class CoursesPage {
    courses: any;


    constructor(public navCtrl: NavController) {
        this.courses = [
            'Pain',
            'Lait',
            'Fromage',
            'Saucisse',
            'Pommes',
            'Bananes',
            'Vin',
            'Chocolat',
            'Avocat',
            'Moutarde',
            'Gateaux au beurre',
            'Mouchoirs'
        ];
    }
}
