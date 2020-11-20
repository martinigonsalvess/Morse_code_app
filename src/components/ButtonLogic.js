import { useState } from 'react';
import './StyleBtn.css';
import './StyleContent.css';

const ButtonLogic = (props) => {
  const [alphaLetter, setAlphaLetter] = useState();
  const [morseLetter, setMorseLetter] = useState();

  const logBtns = (clickedButtonValue) => {
    setAlphaLetter(props.val[0])
    setMorseLetter(props.val[1])

    props.handlePassInfoToParent(clickedButtonValue.concat(props.search))
    console.log(`This is alpha: ${props.val[0]}`);
    console.log(`This is morse: ${props.val[1]}`);
  }

  return (
    <>

    <div class="button-container">
      <button className="btn1"onClick={() => logBtns(props.val)} >
        {/* {props.val[0]}<br/><br/>{props.val[1]} */}
        {props.val[0]}
      </button>

    </div>

    </>
  )
}

export default ButtonLogic