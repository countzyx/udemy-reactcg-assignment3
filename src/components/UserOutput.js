import React from 'react';

type Props = {
  textA: ?string,
  textB: ?string
}

const UserOutput = (props: Props) => {
  const { textA, textB } = props;

  return (
    <div>
      <p>{textA}</p>
      <p>{textB}</p>
    </div>
  );
}

export default UserOutput;
