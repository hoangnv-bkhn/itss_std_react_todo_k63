import React, { useState } from 'react';

function Input( { onAdd } ) {
  const [text, setText] = React.useState('');

  const handleChange = e => setText(e.target.value);

  const handleKeyDown = e => {
    if (e.keyCode === 13) {
      onAdd({text, done:false});
      setText('');
    }
  };

  return (
    <div className="panel-block">
      <input
        className="input"
        type="text"
        placeholder="Todoを入力してください"
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default Input;