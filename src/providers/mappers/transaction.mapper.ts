import { BaseMapper } from "./base/base.mapper";
import { Transaction } from "../../models/transaction.model";
import { ExchangeAgent } from "../../models/exchange-agent.model";
import { Person } from "../../models/person.model";
import { ExchangeAgentOffering } from "../../models/exchange-agent-offering.model";
import { CurrenciesService } from "../currencies.service";
import { PersonMapper } from "./person.mapper";
import { UserBankAccount } from "../../models/user-bank-account.model";
import { UsersService } from "../users.service";

export class TransactionMapper extends BaseMapper<Transaction>{

    type: new (partial?: Partial<Transaction>) => Transaction = Transaction;
    personMapper = new PersonMapper();
    
    constructor(private currencies: CurrenciesService, private users?: UsersService){
        super();
    }

    mapFromBe(be) :Transaction{
        let target = new Transaction({
            ...be,
            created_at: new Date(be.created_at),
            exchangeAgent: new ExchangeAgent({ ...be.exchangeagent }),
            person: this.personMapper.mapFromBe( be.person ),
            exchangeAgentOffering: new ExchangeAgentOffering({ ...be.exchangeagentoffering }),
            personBankAccount: be.personbankaccount ? new UserBankAccount({
                ...be.personbankaccount
            }) : null ,
            exchangeAgentBankAccount: be.exchangeagentbankaccount ? new UserBankAccount({
                ...be.exchangeagentbankaccount
            }): null
        })
        if( this.users.currentUser.isPerson() ){
            target.currencyToDeposit = this.currencies.getCurrencyByCode(target.exchangeAgentOffering.receivedCurrency);
            target.currencyToReceive = this.currencies.getCurrencyByCode(target.exchangeAgentOffering.requestedCurrency);
            target.amountToDeposit = target.amount * target.exchangeAgentOffering.receivedCurrencyAmount;
        }else{
            target.currencyToDeposit = this.currencies.getCurrencyByCode(target.exchangeAgentOffering.requestedCurrency);
            target.currencyToReceive = this.currencies.getCurrencyByCode(target.exchangeAgentOffering.receivedCurrency);
            target.amountToDeposit = target.amount * target.exchangeAgentOffering.requestedCurrencyAmount;
        }
        if( target.exchangeAgentOffering.type == 'V' ){
            target.targetCurrency = this.currencies.getCurrencyByCode(target.exchangeAgentOffering.receivedCurrency);
            target.fromCurrency = this.currencies.getCurrencyByCode(target.exchangeAgentOffering.requestedCurrency);
        }else{
            target.targetCurrency = this.currencies.getCurrencyByCode(target.exchangeAgentOffering.requestedCurrency);
            target.fromCurrency = this.currencies.getCurrencyByCode(target.exchangeAgentOffering.receivedCurrency);
        }
        return target;
    }
}