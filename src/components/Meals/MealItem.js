import React from 'react'
import "./MealItem.css"
import MealItemForm from './MealItemForm'
import { useContext } from 'react'
import CartContext from '../../store/CartContext'

 

const MealItem = (props) => {

  const CartCtx  = useContext(CartContext);
    const price = `$${props.price.toFixed(2)}`
    const AddtoCartHandler = (amount)=>{
        CartCtx.addItem({
            id : props.id,
            name : props.name ,
            amount : amount,
            price : props.price

        })
    }
  return (
    <li className='meal'>
        <div>
            <h3>{props.name}</h3>
            <div className='description'>{props.description}</div>
            <div className='price'>{price}</div>
        </div>
        <div>
          <MealItemForm onAddToCart = {AddtoCartHandler}/>
        </div>
    </li>
  )
}

export default MealItem