import React, {Component} from "react";
import {GET_Products_By_Category} from "../../query/category";
import {client} from '../../index'
import classes from './categoryPage.module.scss'
import {ProductCard} from "../../components/ProductCard/ProductCard";

export default class CategoryPage extends Component{

    constructor(props) {
        super(props);
        this.state={
            products:[]
        }
    }

    componentDidMount = async ()=>{
        await this.getProducts()
    }

     componentDidUpdate=async (prevProps) =>{
        if (this.props.category !== prevProps.category ){
           await this.getProducts()
        }
    }

    async getProducts(){
        const response = await client.query({
            query:GET_Products_By_Category,
            variables:{input:{title:this.props.category}}
        })
        this.setState({
            products:response.data.category.products
        })
    }

    render() {



        return(
            <>
                <div className={classes.productsWrap}>
                    {this.state.products && this.state.products.map(({id,name,brand,gallery,prices,inStock})=>{
                        return <ProductCard key={id} id={id} name={name} prices={prices}
                                            brand={brand} img={gallery[0]}  inStock={inStock} />
                    })}
                </div>
            </>
        )
    }
}