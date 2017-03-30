import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CoursesPage } from "../courses/courses";
import { NotesPage } from "../notes/notes";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    tabCoursesRoot: any = CoursesPage;
    LesNotes: any = NotesPage;

  constructor(public navCtrl: NavController) {
    
  }
}
