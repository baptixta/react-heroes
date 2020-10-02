import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import Heroes from './Pages/Heroes';

function App() {
  return (
    <Router>
      <div>
        <Navbar className="navbar" />
      </div>

      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/Heroes" component={Heroes}></Route>
      </Switch>
    </Router>
  );
}

export default App;
