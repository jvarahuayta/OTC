import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AppStateService } from '../../providers/app-state.service';
import { Login } from '../login/login';
import { RegisterExchangeAgentPage } from '../register-exchange-agent/register-exchange-agent';
import { ChooseAccessPage } from '../choose-access/choose-access';
import { AuthProvider } from '../../providers/auth.service';

/**
 * Generated class for the ChooseProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-choose-profile',
  templateUrl: 'choose-profile.html',
})
export class ChooseProfilePage {

  userType: string = '0';

  constructor(public nav : NavController, private appState: AppStateService, private auth: AuthProvider) { }

  ngOnInit() {
    
  }

  registerClient(){
    this.userType='0';
  }

  registerHouseChangue(){
    this.userType='1';
  }

  ready(){
    this.auth.setAppUserType(this.userType);
    this.nav.push(ChooseAccessPage)
  }
}