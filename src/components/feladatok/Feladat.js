import React, { useState, useEffect, useContext } from 'react'
import "./Feladat.css";
import EgyFeladat from './EgyFeladat'
import { containerContext } from '../Container'


let element
let cim = []
let megoldas = []
let actualFeladatok = []

function Feladat(props) {

  const context = useContext(containerContext)
  let contextFeladatVisibility = context[0]

  const click = (element) => {
    props.feladatokClick(element)
  }

  const feladatCreator = (index) => {
    console.log('feladat props.feladatok ', props.feladatok)
    console.log('feladat actualFeladatok ', actualFeladatok)
    let tempList = []
    tempList = actualFeladatok[index].split('#')
    return tempList
  }

  const listOperations = () => {
    if(props.feladatok.length > 0){
      if(actualFeladatok.length < 5){
        actualFeladatok.push(props.feladatok[0])
        actualFeladatok.push(props.feladatok[1])
        actualFeladatok.push(props.feladatok[2])
        actualFeladatok.push(props.feladatok[3])
        actualFeladatok.push(props.feladatok[4])
        cim.push(props.feladatok[5])
        megoldas.push(props.feladatok[6])
      }
    }
  }

  
  return (
    <div>
      {listOperations()}
      <div id = "feladat" className={contextFeladatVisibility}>
        <h2>{cim[0]}</h2>
        <div id = 'pickerFeladat'>
          {actualFeladatok != undefined ? element = megoldas.map((megold, index) => (<p key={index} >{megold}</p>)) : null}
        </div>
        <div id = 'pickerFeladat'>
          {actualFeladatok != undefined ? element = actualFeladatok.map((feladat, index) => (<ul key={index} ><EgyFeladat aFeladat = {feladatCreator(index)} azIndex = {index}/></ul>)) : null}
        </div>
      </div>
    </div>
    );


}

export default Feladat;
