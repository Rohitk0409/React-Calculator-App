
import './ResultBox.css';
function ResultBox({value}) {
  return (
    <>
      <input type="text" className='input' value={value} readOnly />
    </>
  );
}
 
export default ResultBox;
