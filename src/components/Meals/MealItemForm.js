import React from "react";
import "./MealItemForm.css";
import Input from "../UI/Input";
import { useRef , useState } from "react";

const MealItemForm = (props) => {
  const AmountInputRef =  useRef()
  const [isValid, setIsValid] = useState(true)

  const HandleToCartSubmit =(e)=>{
      e.preventDefault();
      const enteredAmount = AmountInputRef.current.value
      const enteredAmountNumber = +enteredAmount

      if(enteredAmount.trim().length === 0 || enteredAmountNumber <1 || enteredAmountNumber>5){
        setIsValid(false)
        return;
      }
      props.onAddToCart(enteredAmountNumber)

  }
  return (
    <form className="form" onSubmit={HandleToCartSubmit}>
      <Input
        label="Amount"
        ref = {AmountInputRef}
        input={{
          id: "amount _" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ add</button>
      {
       !isValid && <p>please enter the valid value bet 0-5</p>
      }
    </form>
  );
};

export default MealItemForm;
