import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { chooseLogin } from '../pages/chooseLogin/chooseLogin';
import { Login } from '../pages/login/login';
import { RegistrerAccountPage } from '../pages/registrer-account/registrer-account';
import { AuthProvider } from '../providers/auth.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'
import { HTTP } from '@ionic-native/http';
import { AddBankPage } from '../pages/registrer-account/add-bank/add-bank';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppStateService } from '../providers/app-state.service';
import { QuotePage } from '../pages/quote/quote';
import { RegisterExchangeAgentPage } from '../pages/register-exchange-agent/register-exchange-agent';
import { ApiUtil } from '../providers/utils/api.util';
import { StorageUtil } from '../providers/utils/storage.util';
import { JwtUtil } from '../providers/utils/jwt.util';
import { RegisterBankAccountPage } from '../pages/register-bank-account/register-bank-account';
import { BaseService } from '../providers/base/base.service';
import { BanksService } from '../providers/banks.service';
import { CurrenciesService } from '../providers/currencies.service';
import { UsersBankAccountsService } from '../providers/users-bank-accounts.service';
import 'rxjs/observable/of';
import { ChooseAccessPage } from '../pages/choose-access/choose-access';
import { PersonTabsPage } from '../pages/person-tabs/person-tabs';
import { ExchangeAgentTabsPage } from '../pages/exchange-agent-tabs/exchange-agent-tabs';
import { ChooseProfilePage } from '../pages/choose-profile/choose-profile';
import { ExchangeAgentsPage } from '../pages/exchange-agents/exchange-agents';
import { ExchangueAgentService } from '../providers/exchange-agent.service';
import { DataService } from '../providers/data.service';
import { UsersService } from '../providers/users.service';
import { ExchangeAgentTabsHomePage } from '../pages/exchange-agent-tabs-home/exchange-agent-tabs-home';
import { ExchangeAgentOfferingsService } from '../providers/exchange-agent-offerings.service';
import { DetailExchangeAgentPage } from '../pages/detail-exchange-agent/detail-exchange-agent';
import { ModifyAccountBankPage } from '../pages/modify-account-bank/modify-account-bank';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    chooseLogin,
    Login,
    RegistrerAccountPage,
    AddBankPage,
    QuotePage,
    RegisterExchangeAgentPage,
    RegisterBankAccountPage,
    ChooseAccessPage,
    PersonTabsPage,
    ExchangeAgentTabsPage,
    ChooseProfilePage,
    ExchangeAgentsPage,
    ExchangeAgentTabsHomePage,
    DetailExchangeAgentPage,
    ModifyAccountBankPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    chooseLogin,
    Login,
    RegistrerAccountPage,
    AddBankPage,
    QuotePage,
    RegisterExchangeAgentPage,
    RegisterBankAccountPage,
    ChooseAccessPage,
    PersonTabsPage,
    ExchangeAgentTabsPage,
    ChooseProfilePage,
    ExchangeAgentsPage,
    ChooseProfilePage,
    ExchangeAgentTabsHomePage,
    DetailExchangeAgentPage,
    ModifyAccountBankPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    AppStateService,
    StorageUtil,
    JwtUtil,
    ApiUtil,
    BaseService,
    BanksService,
    CurrenciesService,
    UsersBankAccountsService,
    ExchangueAgentService,
    DataService,  
    UsersService,
    ExchangeAgentOfferingsService
  ]
})
export class AppModule {}
