import React, { useState, useEffect, useContext } from 'react'
import './ButtonFeladatok.css';
import buttonFeladatok from '../../assets/buttonFeladatok.png'
import { containerContext } from '../Container'



function ButtonFeladatok() {


  const context = useContext(containerContext)
  let contextFeladatVisibility = context[0]
  const contextFunction = context[1]


    return (
      <div>
        <div id = 'buttonFeladatok'>
          <div className="flip-box">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <img src = {buttonFeladatok} alt = 'oktatas' ></img>
              </div>
              <div className="flip-box-back">
                <img src = {buttonFeladatok} alt = 'oktatas' onClick={(e) => contextFunction('show')} ></img>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }


export default ButtonFeladatok;
