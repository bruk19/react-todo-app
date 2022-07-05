import React from 'react';

const Header = () => {
    const headers = {
        padding: '15px 0'
    };
    return (
        <Header style={headers}>
          <h1>
            style={{
                fontSize: '6rem',
                fontWeight: '600',
                marginBottom: '2rem',
                lineHeight: '1em',
            }}
          </h1>
        </Header>
);
};

export default Header;
