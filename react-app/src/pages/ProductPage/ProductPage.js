import React, {Component} from "react";
import classes from "./productPage.module.scss"
import Slider from "../../components/Slider/Slider";
import {Interweave} from "interweave";
import Option from "../../components/Option/Option";
import {observer} from "mobx-react";
import productState from "../../state/Product/Product"
import cartState from "../../state/Cart/Cart"
import Pricer from "../../components/Pricer/Pricer";

class ProductPage extends Component {


    componentDidMount= async () => {
        await productState.getProduct(this.props.id)
        productState.setOptions()
    }



    render() {

        if (productState.product){

            const {brand,name,gallery,prices,description,attributes} = productState.product


            return (
                <div className={classes.wrapper}>
                    <Slider gallery={gallery} />
                    <div>
                        <h1>{brand}</h1>
                        <p>{name}</p>

                        {attributes && attributes.map(attribute=><Option selectedOptions={productState.selectedOptions} key={attribute.id} id={attribute.id} name={attribute.name}
                                                                         type={attribute.type} items={attribute.items} />)}

                        <h2>Price:</h2>
                        <Pricer prices={prices}/>

                        <button onClick={()=>{cartState.addToCart(productState.product,productState.selectedOptions)}} className={classes.AddButton}>ADD TO CART</button>
                        <br/>

                        <Interweave content={description} />
                    </div>
                </div>
            )
        }

    }

}

export default observer(ProductPage)