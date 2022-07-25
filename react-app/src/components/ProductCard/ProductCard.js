import React, {Component} from "react";
import classes from "./productCard.module.scss"
import {Link} from "wouter";
import Pricer from "../Pricer/Pricer";
import cart from "../../cartCircle.png"


export class ProductCard extends Component{
    render() {
        return(
            <Link to={`/product/${this.props.id}`}>
                <div className={classes.card}>
                    <img src={this.props.img}/>
                    <p className={classes.title}>{this.props.brand} {this.props.name}</p>
                    <Pricer className={classes.price} prices={this.props.prices}/>
                    {!this.props.inStock && <p className={classes.outStock}>OUT OF STOCK</p>}
                        <img className={classes.cartCircle} src={cart} />
                </div>
            </Link>

        )
    }
}