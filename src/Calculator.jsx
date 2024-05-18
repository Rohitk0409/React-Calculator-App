import { useState } from "react";
import ButtonContainer from "./ButtonContainer";
import './Calculator.css';
import ResultBox from "./ResultBox";
function Calculator() {

  let [value,setValue]=useState("")
  
  let click = (event) => {
    console.log(event.target.innerText);
    if (event.target.innerText === "C") {
      setValue("");
    } else if (event.target.innerText === "=") {
      let result = eval(value);
      setValue(result);
    } else {
      let newValue = value + event.target.innerText;
      setValue(newValue);
      
    }
 }
 return(
   <>
   <div className="calculator">
   <ResultBox value={value}></ResultBox>
    <ButtonContainer onClick={click}></ButtonContainer>
   </div>
   </>
 );
}
 export default Calculator;