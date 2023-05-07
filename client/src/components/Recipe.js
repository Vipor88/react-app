import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import getStripe from '../lib/getStripe';
import cartReducer from './reducers/cartReducer';
import { removeItem,addQuantity,subtractQuantity} from './actions/cartActions'



class Recipe extends Component{

 
    constructor(props) {
        super(props);
        
        this.newitems = props.addedItems;
        this.state = {
          items: props.addedItems,
        };

       // this.getStripeItems = this.getStripeItems.bind(this);
    
      }


    getStripeItems = async (props) => {
        let arr = props.items;
        var NewArray = arr.map(function (value) {
            return {
                price: value.stripeId,
                quantity: value.quantity
            }
        })
            
        return NewArray;
    }

      handleCheckout = async (props) => {
        const lineItems = await this.getStripeItems(props);

        const stripe = await getStripe();

        const { error } = await stripe.redirectToCheckout({
        lineItems: lineItems,
          mode: 'payment',
          successUrl: `http://localhost:3000/success`,
          cancelUrl: `http://localhost:3000/`,
          customerEmail: 'customer@email.com',
        });
        console.warn(error.message);
      }
    
    componentWillUnmount() {
         if(this.refs.shipping.checked)
              this.props.substractShipping()
    }

    handleChecked = (e)=>{
        if(e.target.checked){
            this.props.addShipping();
        }
        else{
            this.props.substractShipping();
        }
    }

    

    render(){
  
        return(
            <div className="container">
                <div className="collection">
                    <li className="collection-item">
                            <label>
                                <input type="checkbox" ref="shipping" onChange= {this.handleChecked} />
                                <span>Shipping(+6$)</span>
                            </label>
                        </li>
                        <li className="collection-item"><b>Total: {this.props.total} $</b></li>
                    </div>
                    <div className="checkout">
                        <button onClick={() => this.handleCheckout(this.state)} className="waves-effect waves-light btn">Checkout</button>
                    </div>
                 </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Recipe)
