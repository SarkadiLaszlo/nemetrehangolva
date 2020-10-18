import React, { useState, useEffect, useContext } from 'react'
import './ButtonBack.css';
import buttonBack from '../../assets/buttonBack.png'
import { containerContext } from '../Container'


function ButtonBack(props) {

  const context = useContext(containerContext)
  let contextFeladatVisibility = context[0]
  const contextFunction = context[1]

     return (
      <div>
      <div id = 'buttonBack'>
        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img src = {buttonBack} alt = 'oktatas' width="60vw" height="50vh"></img>
            </div>
            <div className="flip-box-back">
              <img src = {buttonBack} alt = 'oktatas' width="60vw" height="50vh" onClick={(e) => contextFunction('hide')} ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
     

    );
  }



export default ButtonBack;
