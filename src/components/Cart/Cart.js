import React from 'react'
import "./Cart.css"
import Model from '../UI/Model'

const Cart = (props) => {
    const CartItem =( <ul className='cart-items'>
        {[{id:"cl" , name : "shushi" , amount:2 , price : 12.99}].map((item)=>(
            <li>{item.name}</li>
        ))}
    </ul>
    )
  return (
    <Model>
        {CartItem}
        <div className='total'>
            <span>Total amount</span>
            <span>$34.45</span>
        </div>
        <div className='actions'>
         <button className='button--alt'>CLose</button>
         <button className='button'>Order</button>
        </div>
        </Model>
  )
}

export default Cart