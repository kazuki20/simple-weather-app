import React from 'react';
import './App.css';

// redux imports
import { Provider } from 'react-redux';
import store from './store';

// components
import Home from './components/Index';

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
