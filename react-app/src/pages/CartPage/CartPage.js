import React,{Component} from "react";
import classes from './cart.module.scss'
import CartItem from "../../components/CartItem/CartItem";
import cartState from '../../state/Cart/Cart'
import currencyState from '../../state/Currencies/Currencies'
import {observer} from "mobx-react";

class CartPage extends Component{
    render() {


        return(
            <div className={classes.wrapper}>

                <h1 className={classes.title}>Cart</h1>

                <div>
                    {cartState.items && cartState.items.map((item,index)=><CartItem index={index} count={item.count} gallery={item.gallery} brand={item.brand} name={item.name} attributes={item.attributes}
                                                                            selectedOptions={item.selectedOptions} prices={item.prices} />)}
                </div>
                <div className={classes.order}>
                    <p>Tax 21%: {Math.floor((cartState.getTotal()*0.21)*100)/100}</p>
                    <p>Quantity: {cartState.getQuantity()}</p>
                    <p>Total: {cartState.getTotal()}</p>
                    <span>ORDER</span>
                </div>
            </div>
        )
    }
}

export default observer(CartPage)