import React, {Component, memo} from "react";
import classes from "./slider.module.scss"

class Slider extends Component{

    constructor() {
        super();
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
                    return <img className={classes.singleImg} src={this.props.gallery[0]}/>
                }


                return (
                    <div className={classes.wrapper}>
                        <div className={classes.controlPanel}>
                            {this.props.gallery.map(img=> <img className={this.state.selected === img ? classes.selected:''}
                                                               onClick={()=>this.selectSlide(img)} src={img}/>)}
                        </div>
                        <div className={classes.imgWrap}>
                            <img src={this.state.selected ? this.state.selected: this.props.gallery[0]}/>
                        </div>

                    </div>
                )
            }


        }
}

export default memo(Slider)