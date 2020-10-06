import React, { useState, useEffect, useContext } from 'react'
import "./User.css";
import { appContext } from '../../App'

function User(props) {

  //appContext
  const [ authenticated, setAuthenticated, appContactList, setAppContactList, user ] = useContext(appContext)



  return (
    <div>
      <div id="user" className={props.feladatokVisibility}>
        <div id = 'userPicture'>
        <img src = {user.picture} alt = 'picture' width = '50vw' height = '50vh'></img>
        </div>
        <div id = 'userName'>
        {user.name}
        </div>

      </div>
    </div>
    );


}

export default User;
