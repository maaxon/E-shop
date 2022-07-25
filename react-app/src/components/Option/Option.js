import React, {Component} from "react";
import classes from "./option.module.scss"
import productState from "../../state/Product/Product"

class Option extends Component{
    render() {
        const sm = this.props.sm
        const selectedOption = this.props.selectedOptions.find(option => option.attribute === this.props.id )
        console.log(selectedOption.option)

     if (this.props.type === "text"){
         return(
             <>
             <h2>{this.props.name}:</h2>
             <div className={classes.textWrapper} >
                 {this.props.items.map(item=><div
                     onClick={()=>{productState.selectOption(this.props.id,item.id)}}
                     className={`${selectedOption.option === item.id ? classes.active:""} ${sm && classes.sm}`}
                     key={item.id}>{item.value}</div>)}
             </div>
             </>
         )
     }
        if (this.props.type === "swatch"){
            return(
                <>
                    <h2>{this.props.name}:</h2>
                    <div className={classes.swatchWrapper} >
                        {this.props.items.map(item=><div
                            onClick={()=>{productState.selectOption(this.props.id,item.id)}}
                            className={`${selectedOption.option === item.id ? classes.active:""} ${sm && classes.sm}`}
                            style={{backgroundColor: item.value}} key={item.id}/>)}
                    </div>
                </>
            )
        }
    }
}

export default Option