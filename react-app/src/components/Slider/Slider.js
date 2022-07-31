import React, {Component, memo} from "react";
import classes from "./slider.module.scss"

class Slider extends Component{

    constructor(props) {
        super(props);
        this.state={
            selected:undefined
        }
    }

    selectSlide(slide){
        this.setState({selected:slide})
    }



    render() {
            if (this.props.gallery){

                if (this.props.gallery.length === 1){
                    return (
                        <div>
                            <img className={classes.singleImg} src={this.props.gallery[0]} alt={"slide"}/>
                            {!this.props.inStock && <p className={classes.outStock}>OUT OF STOCK</p>}
                        </div>)
                }


                return (
                    <div className={classes.wrapper}>
                        <div className={classes.controlPanel}>
                            {this.props.gallery.map(img=> <img key={Math.random().toString(16)}
                                                               className={this.state.selected === img ? classes.selected:''}
                                                               onClick={()=>this.selectSlide(img)} src={img} alt={"slide"}/>)}
                        </div>

                        <div className={classes.imgWrap}>
                            <img src={this.state.selected ? this.state.selected: this.props.gallery[0]} alt={"slide"}/>
                            {!this.props.inStock && <p className={classes.outStock}>OUT OF STOCK</p>}
                        </div>

                    </div>
                )
            }


        }
}

export default memo(Slider)