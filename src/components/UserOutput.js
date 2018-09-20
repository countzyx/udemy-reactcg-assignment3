// @flow
import React from 'react';

type Props = {
  textA?: ?string,
  textB?: ?string
}

const UserOutput = (props: Props) => {
  const { textA, textB } = props;

  return (
    <div>
      <p>{textA}</p>
      <p>{textB}</p>
    </div>
  );
};

UserOutput.defaultProps = {
  textA: null,
  textB: null,
}

export default UserOutput;
