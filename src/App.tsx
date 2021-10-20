import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import { Top } from "./pages/Top";
import { Create } from "./pages/Create";
import { Timeline } from "./pages/Timeline";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path = '/' component={Top}/>
          <Route path= '/create/' component={Create}/>
          <Route path= '/timeline/' component={Timeline}/>
        </Switch>
      </Router>

    </>
  );
}

export default App;
