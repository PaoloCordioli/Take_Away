import React from 'react';
import { NativeRouter, Route, Switch } from "react-router-native"
import Home from './Components/Home'
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp';
import DrawerNavigation from './Components/DrawerNavigation'
import AccessManager from './Components/AccessManager'
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['VirtualizedLists should never be nested', "Can't perform a React state update on an unmounted component"]);

function App() {
  return (
    <NativeRouter>
      <Switch>
        <Route exact path="/" component={AccessManager} />
        <Route path="/Home" component={Home} />
        <Route path="/SignIn" component={SignIn} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/Dashboard" component={DrawerNavigation} />
      </Switch>
    </NativeRouter>
  );
}

export default App
