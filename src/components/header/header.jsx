import React from 'react';

export const Header = ({children}) => {
  return (
    <div className="header">
      <h1 className="title-site">Web-Chat</h1>
      {children}
    </div>
  )
};
