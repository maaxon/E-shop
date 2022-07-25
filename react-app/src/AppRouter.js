import React, {Component} from "react";
import {Router,Route,Redirect} from "wouter";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import Navbar from "./components/Navbar/Navbar";
import ProductPage from "./pages/ProductPage/ProductPage";
import CartPage from "./pages/CartPage/CartPage";




export default class AppRouter extends Component{
    render() {
        return(
            <>
                    <Navbar />
                    <Router>
                        <Route path={"/"}><Redirect to={'/category/all'}/></Route>
                        <Route path={"/category/:category"}>
                            {params => <CategoryPage category={params.category}/>}
                        </Route>
                        <Route path={"/product/:productId"}>
                            {params => <ProductPage id={params.productId}/>}
                        </Route>
                        <Route path={'/cart'} ><CartPage/></Route>
                    </Router>
            </>

        )

    }
}