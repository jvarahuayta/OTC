import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BanksService } from '../../providers/banks.service';
import { Bank } from '../../models/bank.model';
import { CurrenciesService } from '../../providers/currencies.service';
import { Currency } from '../../models/currency.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { AppStateService } from '../../providers/app-state.service';

/**
 * Generated class for the RegisterBankAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register-bank-account',
  templateUrl: 'register-bank-account.html',
})
export class RegisterBankAccountPage {

  bankList: Bank[];
  currencyList: Currency[];
  currentBankIndex = 0;
  userBankAccountFG: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder,
    private banks: BanksService, private currencies: CurrenciesService, private appState: AppStateService) {
    this.userBankAccountFG = this.fb.group({
      holderName: ['',[Validators.required]],
      accountNumber: ['',[Validators.required]],
      apellative: ['',[Validators.required]],
      currency: [null,[Validators.required]],
      bank: [null,[Validators.required]]
    })
    this.banks.find().subscribe( results => {
      this.bankList = results;
      this.userBankAccountFG.patchValue({
        bank: this.bankList[0]
      });
    });
    this.currencies.find().subscribe( results => {
      this.currencyList = results;
      this.userBankAccountFG.patchValue({
        currency: this.currencyList[0]
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterBankAccountPage');
  }

  onPreviousBank(){
    if( this.currentBankIndex == 0 ){
      this.currentBankIndex = this.bankList.length - 1;
    }else {
      this.currentBankIndex--;
    }
    this.userBankAccountFG.patchValue({
      bank: this.bankList[this.currentBankIndex]
    });
  }

  onNextBank(){
    if( this.currentBankIndex == this.bankList.length - 1 ){
      this.currentBankIndex = 0;
    }else {
      this.currentBankIndex++;
    }
    this.userBankAccountFG.patchValue({
      bank: this.bankList[this.currentBankIndex]
    });
  }

  submit(){
    let currenRegisterState = this.appState.currentState.register;
    this.appState.setState({
      register: {
        ...currenRegisterState,
        savedUserBankAccount: this.userBankAccountFG.value
      }
    })
    this.navCtrl.pop();
  }

}