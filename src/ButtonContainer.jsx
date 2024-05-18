import './ButtonContainer.css';
function ButtonContainer({onClick}){
  let Buttons = ['C', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/', '=', '.'];
  return(
    <div className="buttons">
      {Buttons.map((button)=><button key={button} id="btn" onClick={onClick}><b>{button}</b></button>)}
    </div>
  );
}
 export default ButtonContainer;