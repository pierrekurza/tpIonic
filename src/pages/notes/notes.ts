import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html'
})
export class NotesPage {

  notes: any = [];

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  addNote(){

    let prompt = this.alertCtrl.create({
      title: 'Ajoute Note',
      inputs: [{
        name: 'title'
      }],
      buttons: [
        {
          text: 'Annule'
        },
        {
          text: 'Ajoute',
          handler: data => {
            this.notes.push(data);
          }
        }
      ]
    });

    prompt.present();
  }

  editNote(note){

    let prompt = this.alertCtrl.create({
      title: 'Edite Note',
      inputs: [{
        name: 'title'
      }],
      buttons: [
        {
          text: 'Annule'
        },
        {
          text: 'Sauve',
          handler: data => {
            let index = this.notes.indexOf(note);

            if(index > -1){
              this.notes[index] = data;
            }
          }
        }
      ]
    });

    prompt.present();

  }

  deleteNote(note){
    let index = this.notes.indexOf(note);
    if(index > -1){
      this.notes.splice(index, 1);
    }
  }
}