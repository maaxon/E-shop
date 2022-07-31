import React, {Component} from "react";
import currencyState from "../../state/Currencies/Currencies";
import {observer} from "mobx-react";
import classes from './currencySwitcher.module.scss'
import currencySwitcherArrow from '../../images/currencySwitcherArrow.png'

class CurrencySwitcher extends Component{

    constructor(props) {
        super(props);
        this.wrapperRef = React.createRef();
        this.handleClickOutside = this.handleClickOutside.bind(this)
        this.state = {active:false}
    }


    componentDidMount= async ()=> {
        await currencyState.getCurrencies()
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }


    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.current.contains(event.target) && this.state.active) {
            this.setState({active:false})
        }
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

            <div  onClick={this.onClick} className={classes.currencySwitcher}>
                <span>{currencyState.currency}</span>
                <img className={classes.arrow} src={currencySwitcherArrow} alt={"currencySwitcherArrow"}/>
            </div>

            <div ref={this.wrapperRef} className={`${classes.overlay} ${!this.state.active && classes.disabled}`}>
                {currencyState.currencies.map((currency)=>
                    <p key={currency.label} onClick={()=>{this.onSelect(currency.symbol)}}>{currency.symbol}{currency.label}</p>
                )}
            </div>

            </>
    }
}

export default observer(CurrencySwitcher)