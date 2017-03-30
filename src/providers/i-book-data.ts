import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {observableToBeFn} from "rxjs/testing/TestScheduler";
import {Observable} from "rxjs";

/*
  Generated class for the IBookData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class IBookData {

  constructor(public http: Http) {
    console.log('Hello IBookData Provider');
  }

  getLocalData():Observable<any> {
      return this.http.get("assets/data/donnees.json").map(res => res.json().Books);
  }



}
