import React from 'react';

const Header = () => {
  const headerStyle = {
    padding: '0',
    lineHeight: '1.3em',
  };

  const titleStyle = {
    fontSize: '6rem',
    fontWeight: '600',
    marginBottom: '2rem',
    lineHeight: '1em',
    color: 'rgb(169, 169, 169)',
    textTransform: 'lowercase',
    textAlign: 'center',
  };

  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>
        Todos
      </h1>
    </header>
  );
};

export default Header;
