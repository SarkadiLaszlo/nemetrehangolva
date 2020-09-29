import React, { useContext, useEffect } from "react";
import './Container.css'
import BackgroundSlider from 'react-background-slider'
import alap1 from '../assets/alap1.jpg'
import alap2 from '../assets/alap2.jpg'
import alap3 from '../assets/alap3.jpg'
import alap4 from '../assets/alap4.jpg'
import alap5 from '../assets/alap5.jpg'
import alap6 from '../assets/alap6.jpg'
import alap7 from '../assets/alap7.jpg'
import alap8 from '../assets/alap8.jpg'
import ButtonRolam from './buttons/ButtonRolam'
import ButtonFeladatok from './buttons/ButtonFeladatok'
import ButtonOktatas from './buttons/ButtonOktatas'
import ButtonVizsga from './buttons/ButtonVizsga'
import { appContext } from '../App'


let pictures = []

function Container() {

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
        pictures.push(alap8)
  }

  function handleVizsga(event){
    console.log('Nyit handleVizsga')

  }

  function handleRolam(event){
    console.log('Nyit handleRolam')

  }

  function handleFeladatok(event){
    console.log('Nyit handleRolam')

  }

  function handleOktatas(event){
    console.log('Nyit handleRolam')

  }

  return(
    <div>
      {fillArray()}
      <ButtonRolam handleRolam={handleRolam}/>
      <ButtonFeladatok handleFeladatok={handleFeladatok}/>
      <ButtonOktatas handleOktatas={handleOktatas}/>
      <ButtonVizsga handleVizsga={handleVizsga}/>
      <BackgroundSlider
        images={[pictures[0], pictures[1], pictures[2], pictures[3], pictures[4], pictures[5], pictures[6], pictures[7]]}
        duration={10} transition={2} />
    </div>
)
}


export default Container
