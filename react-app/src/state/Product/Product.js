import { makeAutoObservable } from "mobx"
import {client} from "../../index";
import {GET_Product_By_ID} from "../../query/product";



class Product{
    product=undefined
    selectedOptions=[]
    constructor() {
        makeAutoObservable(this)
    }

    async getProduct(id) {
        const response = await client.query({
            query: GET_Product_By_ID,
            variables: {id}
        })
        this.product = await response.data.product



    }

    setOptions(){
        this.selectedOptions = this.product.attributes.map(attribute=>{return {option:attribute.items[0].id,attribute:attribute.id} })
    }
    selectOption(attribute,newOption){
        this.selectedOptions = this.selectedOptions.map(option=>{
            if (option.attribute === attribute) return {attribute,option:newOption}
            return option
        })
    }
}

export default new Product()