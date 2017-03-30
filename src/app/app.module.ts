import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CoursesPage } from "../pages/courses/courses";
import { NotesPage } from "../pages/notes/notes";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {IBookData} from "../providers/i-book-data";


@NgModule({
  declarations: [
      MyApp,
      HomePage,
      CoursesPage,
      NotesPage
  ],

  imports: [
    IonicModule.forRoot(MyApp)
  ],

  bootstrap: [IonicApp],
  entryComponents: [
      MyApp,
      HomePage,
      CoursesPage,
      NotesPage
  ],

  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
      IBookData
  ]
})
export class AppModule {}
