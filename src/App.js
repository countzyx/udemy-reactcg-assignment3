// @flow
import * as React from 'react';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';
import './App.css';

type Props = {};
type State = {
  usernames: Array<string>
};

class App extends React.Component<Props, State> {
  state = {
    usernames: ['alice', 'bob', 'candy'],
  };


  onChangeNameHandler = (event: SyntheticEvent<HTMLInputElement>) => {
    this.setState({
      usernames: ['alice', 'bob', event.currentTarget.value],
    });
  };

  render = () => {
    const { usernames } = this.state;

    return (
      <div className="App">
        <UserInput
          onChangeHandler={this.onChangeNameHandler}
          defaultValue={usernames[2]}
        />
        <UserOutput textA={usernames[0]} />
        <UserOutput textA={usernames[1]} />
        <UserOutput textA={usernames[2]} />
      </div>
    );
  };
}

export default App;
