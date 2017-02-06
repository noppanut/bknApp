import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IndividualPage } from '../../pages/individual/individual';
import { FamilyPage } from '../../pages/family/family';
import { ProfilePage } from '../../pages/profile/profile';

/*
  Generated class for the Main page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {
  tab1Root: any = IndividualPage;
  tab2Root: any = FamilyPage;
  tab3Root: any = ProfilePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('Main Page is showing');
  }

}
