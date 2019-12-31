import React from 'react';

const Message = ({ message }) => {
  return (
    <div className="message">
      <div>
        <h3>{message.author}</h3>
        <p>{message.content}</p>
      </div>
      <p>{message.created_at}</p>
    </div>
  );
};

export default Message;
