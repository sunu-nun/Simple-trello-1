import React, { useState } from 'react';

const TaskCardTitle = () => {
  const [isClick, setIsClick] = useState(false);
  const [InputCardTitle, setInputCardTitle] = useState('Today');

  const handleOnclick = () => {
    setIsClick(true);
  };

  const handleChange = (e) => {
    setInputCardTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsClick(false);
  };

  const handleBlur = () => {
    setIsClick(false);
  };

  return (
    <div onClick={handleOnclick}>
      {isClick ? (
        <form onSubmit={handleSubmit}>
          <input
            autoFocus
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={InputCardTitle}
          />
        </form>
      ) : (
        <h3>{InputCardTitle}</h3>
      )}
    </div>
  );
};

export default TaskCardTitle;
