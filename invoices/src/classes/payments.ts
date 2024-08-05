import { HasFormatter } from "../interfaces/hasFormatter.js";  

export class Payment implements HasFormatter {
    readonly client: string;
    private details: string;
    public amount: number;

    constructor(client:string,details:string,amount: number){
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    
    format(){
        return `${this.client} owed $${this.amount} for ${this.details}`;
    }
}