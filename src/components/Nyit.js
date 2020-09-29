import React, { useState, useContext, useEffect } from "react";
import './Nyit.css'
import BackgroundSlider from 'react-background-slider'
import alap1 from '../assets/alap11.jpg'
import alap2 from '../assets/alap21.jpg'
import alap3 from '../assets/alap31.jpg'
import alap4 from '../assets/alap41.jpg'
import alap5 from '../assets/alap51.jpg'
import alap6 from '../assets/alap61.jpg'
import alap7 from '../assets/alap71.jpg'
import ButtonBelepes from './buttons/ButtonBelepes'
import { useAuth0 } from "@auth0/auth0-react";
import { appContext } from '../App'


let pictures = []

function Nyit() {

  const [ authenticated, setAuthenticated ] = useContext(appContext);
  const {
    user,
    isAuthenticated,
    loginWithRedirect,
    logout,
  } = useAuth0();

  useEffect(() => {  }, [])

  const fillArray = () => {
        pictures.length = 0
        pictures.push(alap1)
        pictures.push(alap2)
        pictures.push(alap3)
        pictures.push(alap4)
        pictures.push(alap5)
        pictures.push(alap6)
        pictures.push(alap7)
  }

  function handleBelepes(event){
    console.log('Nyit handleBelepes')
    loginWithRedirect()
  }

  return(
    <div>
      {fillArray()}

      <ButtonBelepes handleBelepes={handleBelepes}/>
      <BackgroundSlider
        images={[pictures[0], pictures[1], pictures[2], pictures[3], pictures[4], pictures[5], pictures[6]]}
        duration={10} transition={2} />
    </div>
)
}


export default Nyit
