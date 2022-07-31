import React, {Component} from "react";
import classes from "./productCard.module.scss"
import {Link} from "wouter";
import Pricer from "../Pricer/Pricer";
import cart from "../../images/cartCircle.png"
import productState from "../../state/Product/Product"
import cartState from "../../state/Cart/Cart"

export class ProductCard extends Component{

    quickShopHandle= async (e)=>{
        e.stopPropagation()

        if (this.props.id){
            await productState.getProduct(this.props.id)

            if (productState.product && productState.selectedOptions) {
                cartState.addToCart(productState.product,productState.selectedOptions)
            }
        }
    }



    render() {
        return(
            <Link to={`/product/${this.props.id}`}>
                <div className={classes.card}>
                    <img src={this.props.img} alt={"productImg"}/>

                    <p className={classes.title}>{this.props.brand} {this.props.name}</p>

                    <Pricer className={classes.price} prices={this.props.prices}/>

                    {!this.props.inStock && <p className={classes.outStock}>OUT OF STOCK</p>}

                    <img onClick={this.quickShopHandle} className={classes.cartCircle} src={cart} alt={"quickCart"} />
                </div>
            </Link>

        )
    }
}