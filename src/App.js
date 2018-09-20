// @flow
import React, { Component } from 'react';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';
import './App.css';

type Props = {};
type State = {
  usernames: Array<string>
};

class App extends Component<Props, State> {
  state = {
    usernames: ['alice', 'bob', 'candy'],
  };

  render = () => {
    const { usernames } = this.state;
    return (
      <div className="App">
        <UserInput />
        <UserOutput textA={usernames[0]} />
        <UserOutput textA={usernames[1]} />
        <UserOutput textA={usernames[2]} />
      </div>
    );
  }
}

export default App;
