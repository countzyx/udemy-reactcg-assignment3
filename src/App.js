// @flow
import React, { Component } from 'react';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';
import './App.css';

class App extends Component<{}> {
  render = () => (
    <div className="App">
      <UserInput />
      <UserOutput />
      <UserOutput />
      <UserOutput />
    </div>
  );
}

export default App;
