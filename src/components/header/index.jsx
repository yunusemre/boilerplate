import React from 'react';
import Logo from 'assets/images/logo.png';

const Header = () => (
  <>
    <div className="header-user">
      <p className="content">Hello, Tatar</p>
    </div>
    <div className="header">
      <h2 className="bold">ONCOGUARD Simulator</h2>
      <div className="text-right">
        <img src={Logo} alt="Logo" width="120" />
      </div>
    </div>
    <style jsx>
      {`
        .header-user{
          background: #000;
          height: 30px;
          color: white;
          text-align: right;

          .content{
            max-width: 1360px;
            width: 100%;
            margin: o auto;
          }
        }
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
  </>
);

export default Header;
