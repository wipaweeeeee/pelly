import React, { useState, useEffect } from 'react';
import './App.scss';
import Logo from './assets/logo-top.png';
import MenuCard from './components/MenuCard/MenuCard';
import Main from './Main';
import Lottie from 'react-lottie';
import * as animationData from './assets/load.json'
import Logo_init from './assets/logo_init.png';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Home = () => {
  let fpo = [];
  const [ loading, setLoading ] = useState(true);
  const [ logo, setLogo ] = useState(false);

  for ( var i = 0; i < 5; i++) {
    fpo.push(<MenuCard content="Signature Sundae" />)
  }

  //Lottie
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRadio: 'xMidYMid slice'
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return (() => {
      clearTimeout(timer);
      setLogo(true);
    });

  }, [])

  useEffect(() => {
    const timerLogo = setTimeout(() => {
      setLogo(false);
    }, 1800);

    return (() => {
      clearTimeout(timerLogo);
      setLogo(true);
    });

  }, [loading])

  return (
    <div className="App container home">
      {loading && <div className="loader"><Lottie options={defaultOptions} height={100} width={100} /></div>}
      {logo && !loading && <div className="loader"><img src={Logo_init} width="291" height="auto"/></div>}
      {!logo && !loading && 
        <React.Fragment>
        <img src={Logo} width="140"/>
        <MenuCard content="Design Your Own Sundae" cta="/main"/>
        {fpo}
        </React.Fragment>
    }
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
