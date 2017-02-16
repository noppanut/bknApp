import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from '../../model/user';
import { BknUsers } from '../../providers/bkn-users';
/*
  Generated class for the Individual page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-individual',
  templateUrl: 'individual.html'
})
export class IndividualPage {
  users: User[];

  /*constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndividualPage');
  }*/
  constructor(public navCtrl: NavController, private bknusers: BknUsers) {
    bknusers.load().subscribe(users => {
      console.log(users)
    })
  }

}
