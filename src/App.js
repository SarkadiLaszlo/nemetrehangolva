import React, { useState } from "react";
import Nyit from './components/Nyit';
import Container from './components/Container';
import './App.css';
import { useAuth0 } from "@auth0/auth0-react";

export const appContext = React.createContext([{}, () => {}])

const App = () => {

  const [ authenticated = false, setAuthenticated ] = useState([]);
  const {
    user,
    isAuthenticated,
    loginWithRedirect,
    logout,
  } = useAuth0();

  return (
    <div className="App">
    {console.log('app user ', user)}
      <appContext.Provider value = {[authenticated, setAuthenticated]}>
        {isAuthenticated ? <Container /> : <Nyit />}
      </appContext.Provider>
    </div>
  );
}

export default App;
