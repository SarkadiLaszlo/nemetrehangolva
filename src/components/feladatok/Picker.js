import React, { useState, useEffect, useContext } from 'react'
import "./Picker.css";
import ButtonBack from '../buttons/ButtonBack'
import iconFeladat from '../../assets/iconFeladat.png'


let feladatPickerList = []
let element

function Picker(props) {

  const makeFeladatList = () => {
    feladatPickerList.length = 0
    feladatPickerList.push('feladat1')
    feladatPickerList.push('feladat2')
    feladatPickerList.push('feladat3')
    feladatPickerList.push('feladat4')
    feladatPickerList.push('feladat5')
  }

  const click = (element) => {
    props.feladatokClick(element)
  }

  return (
    <div>
      {makeFeladatList()}
      <div id="picker" className={props.feladatokVisibility}>
        <h2>Feladatok</h2>
        <div id = 'pickerFeladat'>
          {element = feladatPickerList
            .map((feladat, index) => (
              <ul key={index} >
                <img src = {iconFeladat} alt = 'feladat1' width = '60vw' height = '80vh' onClick={(e) => click(index)}></img>
                <p>{index+1} feladat</p>
                </ul>
            ))}
        </div>
      </div>
    </div>
    );


}

export default Picker;
