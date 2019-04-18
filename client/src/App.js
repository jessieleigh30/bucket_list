// React Stuff
import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

// Component Imports
import Dashboard from './components/Dashboard';
import Categories from './components/CategoryHome';
import Navbar from './components/Navbar';

// Other Imports
import NoMatch from './components/NoMatch';
import Login from './components/Login';

// CSS
// import './App.css';

const App = () => (
  <Fragment>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/login" component={Login} />
      {/* <Route exact path="/register" component={Register} /> */}
      <Route exact path="/categories" component={Categories} />
      <Route component={NoMatch}/>
    </Switch>
  </Fragment>
)

export default App;
