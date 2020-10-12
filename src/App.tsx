import React from 'react';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import { HomePage } from './pages/index';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* use exact path for "/" otherwise it will match every path containing "/" */}
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
