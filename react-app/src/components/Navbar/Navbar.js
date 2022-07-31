import React, {Component} from "react";
import {client} from "../../index";
import {GET_ALL_Categories} from "../../query/category";
import {Link} from "wouter";
import classes from './navbar.module.scss'
import logo from '../../images/logo.png'
import {observer} from "mobx-react";
import Cart from "../Cart/Cart";
import CurrencySwitcher from "../CurrencySwitcher/CurrencySwitcher";


class Navbar extends Component{

    constructor(props) {
        super(props);
        this.state={
            categories:[],
            currentPage:'',
        }
    }

    componentDidMount = async ()=>{
        const response = await client.query({
            query:GET_ALL_Categories
        })

        const currentPage=document.location.pathname.replace("/category/",'')

        this.setState({
            currentPage,
            categories:response.data.categories,
        })

    }

    setPage=(category)=>{
        this.setState({...this.state,currentPage:category})
    }

    capitalizeFirstLetters(str){
        return str.toLowerCase().replace(/^\w|\s\w/g, function (letter) {
            return letter.toUpperCase();
        })
    }

    render() {
        return(
            <nav className={classes.navbar}>

                <div className={classes.linkWrap}>
                    {this.state.categories && this.state.categories.map((category)=>{
                        return <Link key={category.name} onClick={()=>this.setPage(category.name)}
                                     className={this.state.currentPage===category.name ? classes.active:""}
                                     to={`/category/${category.name}`}>{this.capitalizeFirstLetters(category.name)}</Link>
                    })}
                </div>

                <div className={classes.logoWrap}>
                    <Link onClick={()=>this.setCategory('all')} to={'/category/all'}><img src={logo} alt="logo"/></Link>
                </div>

                <div className={classes.rightSide}>
                    <Cart/>
                   <CurrencySwitcher/>
                </div>

            </nav>
        )
    }
}

export default observer(Navbar);