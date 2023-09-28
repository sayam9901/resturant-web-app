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
        const UpdatedTotalAmount = state.totalAmount + (action.item.price * action.item.amount)

        const existingCartINdex = state.items.findIndex(item => item.id === action.item.id)

        const existingCartItem = state.items[existingCartINdex]

        let UpdatedItems ; 

        if(existingCartItem){
            const UpdatedItem ={
            ...existingCartItem,
            amount : existingCartItem.amount + action.item.amount
        }
        UpdatedItems = [...state.items]
        UpdatedItems[existingCartINdex] = UpdatedItem
    }else{
         UpdatedItems = state.items.concat(action.item)
    }
        return {
            items : UpdatedItems,
            totalAmount : UpdatedTotalAmount
        }
    }

    if(action.type === "REMOVE"){
        const existingCartItemIndex = state.items.findIndex((item)=> item.id === action.id)
        const existingITem = state.items[existingCartItemIndex]
        const updatedtotalAmount = state.totalAmount - existingITem.price

        let updatedItems ;
        if(existingITem.amount === 1 ){
            updatedItems = state.items.filter(item => item.id !== action.id )
        }
        else{
            const updatedItem = {
                ...existingITem , 
                amount : existingITem.amount-1
            }
            updatedItems = [...state.items]
            updatedItems[existingCartItemIndex] = updatedItem

        }
        return {
            items : updatedItems , 
            totalAmount : updatedtotalAmount
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