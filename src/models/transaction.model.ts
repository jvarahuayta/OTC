import { BaseModel } from "./base/base.model";
import { Image } from "./shared/image.model";
import { Person } from "./person.model";
import { ExchangeAgent } from "./exchange-agent.model";
import { ExchangeAgentOffering } from "./exchange-agent-offering.model";
import { Currency } from "./currency.model";

export class Transaction extends BaseModel<Transaction>{

    status: '0' | '1' | '2';
    code: string;
    amount: number;
    userTransactionImage: Image;
    exchangeAgentTransactionImage: Image;
    rejectionReason: string;
    person: Person;
    exchangeAgent: ExchangeAgent;
    exchangeAgentOffering: ExchangeAgentOffering;
    type: 'SAFE' | 'FAST';

    targetCurrency: Currency;

}