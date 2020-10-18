import React, { useState } from "react";
import Nyit from './components/Nyit';
import Container from './components/Container';
import './App.css';
import { useAuth0 } from "@auth0/auth0-react";

export const appContext = React.createContext([{}, () => {}])

const App = () => {

  let actualWidth = window.innerWidth

  const [ authenticated = false, setAuthenticated ] = useState([]);
  const {
    user,
    isAuthenticated,
    loginWithRedirect,
    logout,
  } = useAuth0();
  const [ appContactList, setAppContactList ] = useState([]);

  const saveUser = () => {
    appContactList.push(user.name)
  }



  return (
    <div className="App">
    {user == undefined ? console.log('USER UNDEF ') : saveUser()}
      <appContext.Provider value = {[authenticated, setAuthenticated, appContactList, setAppContactList, user]}>
        {isAuthenticated ? <Container actWidth = {actualWidth}/> : <Nyit />}
      </appContext.Provider>
    </div>
  );
}

export default App;
