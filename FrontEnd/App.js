import React from 'react';
import { Router, Scene } from 'react-native-router-flux'
import Home from './Components/Home'
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp';

function App() {
  return (
    <Router>
      <Scene>
        <Scene key="Home" component={Home} initial={true} hideNavBar={true}/>
        <Scene key="SignIn" component={SignIn} hideNavBar={true} />
        <Scene key="SignUp" component={SignUp} hideNavBar={true} />
      </Scene>
    </Router>
  );
}

export default App
