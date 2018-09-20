// @flow
import React from 'react';

type Props = {
  style?: ?Object,
  textA?: ?string,
  textB?: ?string,
}

const UserOutput = (props: Props) => {
  const { style, textA, textB } = props;
  const defaultStyle = {
    width: '60%',
    margin: '16px auto',
    border: '1px #eee',
    boxShadow: '0 2px 3px #ccc',
    padding: '16px',
    textAlign: 'center',
  };

  return (
    <div style={style || defaultStyle}>
      <p>{textA}</p>
      <p>{textB}</p>
    </div>
  );
};

UserOutput.defaultProps = {
  style: null,
  textA: null,
  textB: null,
};

export default UserOutput;
