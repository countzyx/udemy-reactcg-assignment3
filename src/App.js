// @flow
import React, { Component } from 'react';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';
import './App.css';

class App extends Component<{}> {
  render = () => (
    <div className="App">
      <UserInput />
      <UserOutput textA="alice" />
      <UserOutput textA="bob" />
      <UserOutput textA="candy" />
    </div>
  );
}

export default App;
