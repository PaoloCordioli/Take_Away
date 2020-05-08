import React from 'react';
import { NativeRouter, Route, Switch } from "react-router-native"
import Home from './Components/Home'
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp';
import Dashboard from './Components/Dashboard'

function App() {
  return (
    <NativeRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/SignIn" component={SignIn} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/Dashboard" component={Dashboard} />
      </Switch>
    </NativeRouter>
  );
}

export default App
