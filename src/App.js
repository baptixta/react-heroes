import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import Heroes from './Pages/Heroes';

function App() {
  return (
    <Router>
      <div>
        <Navbar className="navbar" />
        <h1>Home</h1>
      </div>

      <Switch>
        <Route path="/" component={Home}></Route>
        <Route path="/Heroes" component={Heroes}></Route>
      </Switch>
    </Router>
  );
}

export default App;
