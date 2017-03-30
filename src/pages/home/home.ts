import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CoursesPage } from "../courses/courses";
import { NotesPage } from "../notes/notes";
import { LivresPage } from "../livres/livres";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    tabCoursesRoot: any = CoursesPage;
    LesNotes: any = NotesPage;
    livres: any = LivresPage;

  constructor(public navCtrl: NavController) {
  }
}
