import React, {Component} from "react";
import classes from './cart.module.scss'
import cartState from "../../state/Cart/Cart";
import CartItem from "../CartItem/CartItem";
import {observer} from "mobx-react";
import {Link} from "wouter";
import cart from "../../cart.png"

class Cart extends Component{

    render() {
        return(
            <>
                <div className={classes.cartIcon}>
                    <img  src={cart} onClick={cartState.switchOverlay}/>
                    {cartState.items.length > 0 && <div>{cartState.items.length}</div>}
                </div>


                <div className={`${classes.overlay} ${!cartState.overlayActive && classes.disabled}`}>

                    <div className={classes.cart}>
                        <p><b>My bag,</b> {cartState.items.length} items</p>
                        {cartState.items && cartState.items.map((item,index)=><CartItem sm key={item.id} index={index} count={item.count} gallery={item.gallery.slice(0,1)} brand={item.brand} name={item.name} attributes={item.attributes}
                                                                                selectedOptions={item.selectedOptions} prices={item.prices} />)}

                        {cartState.items.length > 0 &&
                        <div className={classes.cartBottom}>
                            <Link onClick={cartState.switchOverlay} to={'/cart'}>VIEW CART</Link>
                            <span>CHECK OUT</span>
                        </div>
                        }
                    </div>
                </div>
            </>
        )
    }
}




export default observer(Cart)