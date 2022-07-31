import React, {Component} from "react";
import classes from './cart.module.scss'
import cartState from "../../state/Cart/Cart";
import CartItem from "../CartItem/CartItem";
import {observer} from "mobx-react";
import {Link} from "wouter";
import cart from "../../images/cart.png"
import currencyState from "../../state/Currencies/Currencies"

class Cart extends Component{

    render() {
        return(
            <>
                <div className={classes.cartIcon}>
                    <img  src={cart} onClick={cartState.switchOverlay} alt={"cartIcon"}/>
                    {cartState.items.length > 0 && <div>{cartState.getQuantity()}</div>}
                </div>


                <div onClick={cartState.switchOverlay} className={`${classes.overlay} ${!cartState.overlayActive && classes.disabled}`}>

                    <div onClick={(e)=>{e.stopPropagation()}} className={classes.cart}>
                        <p><b>My bag,</b> {cartState.items.length} items</p>

                        {cartState.items && cartState.items.map((item,index)=>
                            <CartItem key={item.id+index} sm={true}  index={index} count={item.count}
                                      gallery={item.gallery.slice(0,1)} brand={item.brand}
                                      name={item.name} attributes={item.attributes}
                                      selectedOptions={item.selectedOptions} prices={item.prices} />
                                      )}

                        {cartState.items.length > 0 &&
                            <>
                                <p className={classes.total}>
                                    <b>Total: </b>
                                    <b>{currencyState.currency}{Math.floor((cartState.getTotal())*100)/100}</b>
                                </p>
                                <div className={classes.cartBottom}>
                                    <Link onClick={cartState.switchOverlay} to={'/cart'}>VIEW CART</Link>
                                    <span>CHECK OUT</span>
                                </div>
                            </>
                        }

                    </div>
                </div>
            </>
        )
    }
}




export default observer(Cart)