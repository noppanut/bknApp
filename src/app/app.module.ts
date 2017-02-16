import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AuthenPage } from '../pages/authen/authen';
import { MainPage } from '../pages/main/main';
import { RegisterPage } from '../pages/register/register';
import { IndividualPage } from '../pages/individual/individual';
import { FamilyPage } from '../pages/family/family';
import { ProfilePage } from '../pages/profile/profile';
import { BknUsers } from '../providers/bkn-users';

@NgModule({
  declarations: [
    MyApp,
    AuthenPage,
    MainPage,
    RegisterPage,
    IndividualPage,
    FamilyPage,
    ProfilePage
    
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AuthenPage,
    MainPage,
    RegisterPage,
    IndividualPage,
    FamilyPage,
    ProfilePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, BknUsers]
})
export class AppModule {}
