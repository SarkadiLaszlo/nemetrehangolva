import React, { useState, useEffect, useContext } from 'react'
import "./EgyFeladat.css";
import ButtonOk from '../buttons/ButtonOk'



let element
let egyValue
let kettoValue



function EgyFeladat(props) {

const [egyStyle, setEgyStyle] = useState([])
const [kettoStyle, setKettoStyle] = useState([])

  const click = (element) => {
    switch(props.azIndex){
      case 0:
      egyValue == 'nur' ? setEgyStyle('right') : setEgyStyle('wrong')
      kettoValue == 'vor' ? setKettoStyle('right') : setKettoStyle('wrong')
      break

      case 1:
      egyValue == 'das' ? setEgyStyle('right') : setEgyStyle('wrong')
      kettoValue == 'gesetzliche' ? setKettoStyle('right') : setKettoStyle('wrong')
      break

      case 2:
      egyValue == 'Ausweis' ? setEgyStyle('right') : setEgyStyle('wrong')
      kettoValue == 'zwischen' ? setKettoStyle('right') : setKettoStyle('wrong')
      break

      case 3:
      egyValue == 'darauf' ? setEgyStyle('right') : setEgyStyle('wrong')
      kettoValue == 'zu' ? setKettoStyle('right') : setKettoStyle('wrong')
      break

      case 4:
      egyValue == 'kein' ? setEgyStyle('right') : setEgyStyle('wrong')
      kettoValue == 'entschieden' ? setKettoStyle('right') : setKettoStyle('wrong')
      break
    }
  }

  const handleEgy = (element) => {
    egyValue = element.target.value
  }

  const handleKetto = (element) => {
    kettoValue = element.target.value
  }

  return (
    <div>
      <div id="egyFeladat" className={props.feladatokVisibility}>
        <div>
          {props.aFeladat[0]}
          {<input id = {egyStyle} type="text" name="egy" onChange={handleEgy} />}
          {props.aFeladat[1]}
          {<input id = {kettoStyle} type="text" name="ketto" onChange={handleKetto} />}
          {props.aFeladat[2]}
        </div>
        <div id = 'floatingButtonOk'>
          <ButtonOk handleOk={click}/>
        </div>
      </div>
    </div>
    );


}

export default EgyFeladat;
