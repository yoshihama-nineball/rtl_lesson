import React, { useState, ChangeEvent } from 'react';

type Props = {
  outputConsole: (value: string) => void,
};

const RenderInput: React.FC<Props> = ({ outputConsole }) => {
  const [input, setInput] = useState('');

  const outputValue = () => {
    if (input) {
      outputConsole(input);
      setInput('');
    }
  };

  const updateValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    console.log(e.target.value); // debug
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter"
        value={input}
        onChange={updateValue}
      />
      <button onClick={outputValue}>Console</button>
    </>
  );
};

export default RenderInput;
