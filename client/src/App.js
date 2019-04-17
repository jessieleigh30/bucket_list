// React Stuff
import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

// Component Imports
import Dashboard from './components/Dashboard';
import Categories from './components/CategoryHome';

// Other Imports
import NoMatch from './components/NoMatch';

// CSS
import './App.css';

const App = () => (
  <Fragment>
    <Switch>
      {/* <Route exact path="/dashboard" component={Dashboard} /> */}
      <Route exact path="/categories" component={Categories} />
      <Route component={NoMatch}/>
    </Switch>
  </Fragment>
)

export default App;
