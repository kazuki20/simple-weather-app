import React from 'react';
import './App.css';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";

// redux imports
import { Provider } from 'react-redux';
import store from './store';

// components
import Home from './components/Home/Index';
import Forecast from './components/Forecast/Index';

const hist = createBrowserHistory();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={hist}>
          <Switch>
            <Route path="/weather_forecast/:id" render={(props) => <Forecast {...props} />} exact />
            <Route path="/" render={(props) => <Home {...props} />} exact />
          </Switch>
        </Router>
      </Provider>
    );
  }
}
export default App;
