// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Affected from './Affected';
import Vaccinated from './Vaccinated';
import NeighboringCountries from './NeighboringCountries';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Affected} />
        <Route path="/vaccinated" component={Vaccinated} />
        <Route path="/neighboring" component={NeighboringCountries} />
      </Switch>
    </Router>
  );
}

export default App;
