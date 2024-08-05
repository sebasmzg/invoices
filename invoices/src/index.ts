import { HasFormatter } from "./interfaces/hasFormatter.js";
import { Invoice } from "./classes/invoices.js";
import { Payment } from "./classes/payments.js";
import { ListTemplate } from "./classes/listTemplate.js";


const form  = <HTMLFormElement> document.querySelector(".new-item-form");
const type = <HTMLSelectElement> document.querySelector("#type");
const toFrom = <HTMLInputElement> document.querySelector("#tofrom");
const details = <HTMLInputElement> document.querySelector("#detail");
const amount = <HTMLInputElement> document.querySelector("#amount");

const ul = <HTMLUListElement> document.querySelector(".item-list");
const list  = new ListTemplate(ul);

form.addEventListener("submit",(e:Event)=>{
    e.preventDefault();

    let doc: HasFormatter;

    if(type.value === "invoice"){
        doc = new Invoice(toFrom.value,details.value,amount.valueAsNumber);
    } else {
        doc = new Payment(toFrom.value,details.value,amount.valueAsNumber);
    }
    
    list.render(doc,type.value,"end")

    form.reset();
});