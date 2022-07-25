import React, {Component} from "react";
import currencyState from "../../state/Currencies/Currencies";
import {observer} from "mobx-react";
import classes from './currencySwitcher.module.scss'

class CurrencySwitcher extends Component{

    constructor() {
        super();
        this.state = {active:false}
    }

    componentDidMount= async ()=> {
        await currencyState.getCurrencies()
    }

    onSelect=(symbol)=>{
        currencyState.setCurrency(symbol)
        this.setState({active:false})
    }

    onClick=()=>{
       this.setState({active:true})
    }


    render() {
        return <>
            <div onClick={this.onClick} className={classes.currencySwitcher}>
                <span>{currencyState.currency}</span>
                <span className={classes.arrow}>&#129083;</span>
            </div>

            <div className={`${classes.overlay} ${!this.state.active && classes.disabled}`}>
                {currencyState.currencies.map((currency)=>
                    <p onClick={()=>{this.onSelect(currency.symbol)}}>{currency.symbol}{currency.label}</p>
                )}
            </div>

            </>
    }
}

export default observer(CurrencySwitcher)