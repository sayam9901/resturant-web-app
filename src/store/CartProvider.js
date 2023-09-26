import React from 'react'
import CartContext from './CartContext'
import { useReducer } from 'react'

const DefaultState = {
    items : [],
    totalAmount : 0
}

const CartReducer = (state , action)=>{
    if(action.type === "ADD"){
        // console.log(state.items)
        // console.log(action.item)
        // const DataState = [state.item , action.item]
        // console.log(DataState)
        const UpdatedItem = state.items.concat(action.item)
        const UpdatedTotalAmount = state.totalAmount + (action.item.price * action.item.amount)

        return {
            items : UpdatedItem,
            totalAmount : UpdatedTotalAmount
        }
    }
 return DefaultState;
}

const CartProvider = (props) => {
   const [CartState , dispatchCartAction] = useReducer(CartReducer , DefaultState)
    const addItemToCartHandler = (item)=>{
        dispatchCartAction({type : "ADD" , item : item})
    }
    const removeItemFromCartHandler =(id)=>{
        dispatchCartAction({type:"REMOVE", id : id})
    }

    const cartContext = {
        items : CartState.items,
        totalAmount : CartState.totalAmount,
        addItem : addItemToCartHandler ,
        removeItem : removeItemFromCartHandler
    }
  return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider