import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect, useSelector } from 'react-redux'

 const Navbar=()=>{
    const counter =  useSelector((state) => {
        var count = 0;
    
        const sum = state.addedItems.reduce((accumulator, object) => {
            return accumulator + object.quantity;
            }, 0)

         return sum
    })
        return(
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo">Shopping</Link>
                    
                    <ul className="right">
                        <li><Link to="/">Shop</Link></li>
                        <li><Link to="/cart">My cart</Link></li>
                        <li><Link style={{ width:"3rem", height: "3rem", position: "relative" }} to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
                        <div className="rounded-circle bg-success d-flex justify-content-center align-items-center" style={{ color: "white", width: "1.5rem", height: "1.5rem", postion: "absolute", bottom: 0, left: 0, transform: "translate(25%, 25%)", }}>{counter}</div>  
                    </ul>
                    
                    
                </div>
                
            </nav>
   
        
    )
        }
//}
const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        //addedItems: state.addedItems
    }
}
export default connect(mapStateToProps,null)(Navbar);

