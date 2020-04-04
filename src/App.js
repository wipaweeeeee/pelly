import React from 'react';
import './App.scss';
import Logo from './assets/logo-top.png';
import MenuCard from './components/MenuCard/MenuCard';
import Main from './Main';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Home = () => {
  let fpo = [];

  for ( var i = 0; i < 5; i++) {
    fpo.push(<MenuCard content="Signature Sundae" />)
  }

  return (
    <div className="App container">
      <img src={Logo} width="140"/>
      <MenuCard content="Design Your Own Sundae"/>
      {fpo}
    </div>
  )
}

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/main" component={Main} />
        </Switch>
      </Router>
  );
}

export default App;
