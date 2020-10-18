import React, { useState, useEffect, useContext } from 'react'
import "./User.css";
import { appContext } from '../../App'


function User(props) {

  //appContext
  const [ authenticated, setAuthenticated, appContactList, setAppContactList, user ] = useContext(appContext)


  let userVisibility;

  authenticated ? userVisibility = 'show' : userVisibility = 'hide'

  return (
    <div>
      <div id="user" className={userVisibility}>
        <div id = 'userPicture'>
        <img src = {user.picture} width = '50vw' height = '50vh'></img>
        </div>
        <div id = 'userName'>
        {user.name}
        </div>

      </div>
    </div>
    );


}

export default User;
