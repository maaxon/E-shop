import { makeAutoObservable } from "mobx"
import {client} from "../../index";
import {GET_Currencies} from "../../query/currencies";



class Currency{
    currencies=[]
    currency=undefined
    constructor() {
        makeAutoObservable(this)
    }

     async getCurrencies() {
        const response = await client.query({
            query: GET_Currencies,
        })
        this.currencies = await response.data.currencies
        this.currency = response.data.currencies[0].symbol
    }


    setCurrency=(symbol)=>{
        this.currency=symbol
    }
}

export default new Currency()