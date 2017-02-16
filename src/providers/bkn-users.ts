import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

import { User } from '../model/user';

/*
  Generated class for the BknUsers provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class BknUsers {

  bknUserApiUrl = 'http://10.34.101.236:8088/serviceapi/';

  constructor(public http: Http) {
    console.log('Hello BknUsers Provider');
  }

  // Load all
  load(): Observable<User[]> {
    return this.http.get(`${this.bknUserApiUrl}/api/values`)
      .map(res => <User[]>res.json());
  }

}
