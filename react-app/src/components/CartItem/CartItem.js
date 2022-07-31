import React, {Component} from "react";
import classes from './cartItem.module.scss'
import Option from "../Option/Option";
import CartSlider from "../CartSlider/CartSlider";
import Pricer from "../Pricer/Pricer";
import cartState from '../../state/Cart/Cart'


export default class CartItem extends Component{
    render() {


        const {selectedOptions,attributes,gallery,sm,count,index,underline} = this.props

        return(
            <div className={`${classes.wrapper} ${underline && classes.underline}`}>
                <div>
                    <h1>{this.props.brand}</h1>
                    <p>{this.props.name}</p>
                    <Pricer prices={this.props.prices}/>
                    {attributes && attributes.map(attribute=>
                        <Option sm selectedOptions={selectedOptions} key={attribute.id}
                                id={attribute.id} name={attribute.name}
                                type={attribute.type} items={attribute.items} />
                                )}
                </div>

                <div className={classes.rightSide}>

                    <div className={classes.counter}>
                        <span onClick={()=>{cartState.incrementProductCount(index)}}>+</span>
                        <p>{count}</p>
                        <span onClick={()=>{cartState.decrementProductCount(index)}}>-</span>
                    </div>

                    <CartSlider sm={sm} gallery={gallery}/>

                </div>
            </div>
        )
    }
}