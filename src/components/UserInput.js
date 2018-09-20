// @flow
import * as React from 'react';

type Props = {
  defaultValue?: ?string,
  onChangeHandler?: ?(event: SyntheticEvent<HTMLInputElement>) => void
}

const UserInput = (props: Props) => {
  const { defaultValue, onChangeHandler } = props;

  return (
    <div>
      <input type="text" onChange={onChangeHandler} defaultValue={defaultValue} />
    </div>
  );
};

UserInput.defaultProps = {
  defaultValue: null,
  onChangeHandler: null,
};

export default UserInput;
