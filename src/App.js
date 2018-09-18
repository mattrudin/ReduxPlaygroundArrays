import React, { Component } from 'react';
import './App.css';
import List from './components/List/List';
import { store } from './components/Store/store';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <List />
      </Provider>
    );
  }
}

export default App;
