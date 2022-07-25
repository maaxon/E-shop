import React, {Component} from "react";
import currencyState from "../../state/Currencies/Currencies";
import {observer} from "mobx-react";

class Pricer extends Component{
    render() {
        const price = this.props.prices.find(price=>price.currency.symbol===currencyState.currency)
        if (price){
            return (
                <p className={this.props.className ? this.props.className:"" }>{price.currency.symbol}{price.amount}</p>
            );
        }

    }
}
export default observer(Pricer)