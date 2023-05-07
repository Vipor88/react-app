
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,SET_ITEMS,GET_ITEMS,SET_WEATHER,ADD_SHIPPING} from './action-types/cart-actions'

//add cart action
export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
        id
    }
}
//remove item action
export const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM,
        id
    }
}
//subtract qt action
export const subtractQuantity=(id)=>{
    return{
        type: SUB_QUANTITY,
        id
    }
}
//add qt action
export const addQuantity=(id)=>{
    return{
        type: ADD_QUANTITY,
        id
    }
}

export const setItems=(payload)=>{
    return{ 
        type: SET_ITEMS, 
        payload 
    }
}

export const setWeather=(payload)=>{
    return{ 
        type: SET_WEATHER, 
        payload 
    }
}

export const getItems=()=>{
    return{ 
        type: GET_ITEMS 
    }
}

