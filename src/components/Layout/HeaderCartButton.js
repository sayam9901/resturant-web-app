import React from 'react'
import CartIcon from "../Cart/CartIcon"
import "./HeaderCartButton.css"
import { useContext } from 'react'
import CartContext from '../../store/CartContext'

const HeaderCartButton = (props) => {
  const CartCtx = useContext(CartContext);
  console.log(CartCtx.items)
  const NumberOfCartItem = CartCtx.items.reduce((current , item )=> {
    return current + item.amount
  },0)
  return (
    <button className='button' onClick={props.onShowModel}>
        <span className='icon'><CartIcon/></span>
        <span>your cart</span>
        <span className='badge'>{NumberOfCartItem}</span>
    </button>
  )
}

export default HeaderCartButton