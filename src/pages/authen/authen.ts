import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../../pages/register/register';
import { MainPage } from '../../pages/main/main';

/*
  Generated class for the Authen page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-authen',
  templateUrl: 'authen.html'
})
export class AuthenPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('Authen Page is showing');
  }

  goToRegister(){
    this.navCtrl.push(RegisterPage);
  }
  goMain(){
    this.navCtrl.push(MainPage);
  }

}
