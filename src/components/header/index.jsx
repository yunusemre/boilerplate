import React from 'react';
import Logo from 'assets/images/logo.png';

const Header = () => (
  <div className="header">
    <h2 className="bold">ONCOGUARD Simulator</h2>
    <div className="text-right">
      <img src={Logo} alt="Logo" width="120" />
    </div>
    <style jsx>
      {`
      .header{ 
        display: flex;
        justify-content: space-between;

        h2{
          margin-bottom: 0;
          padding-top: 10px;
        }
      }
    `}
    </style>
  </div>
);

export default Header;
