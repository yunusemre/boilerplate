import React from 'react';
import { connect } from 'react-redux';
import Header from '../header';
import Footer from '../footer';

const Layout = ({ children }) => (
  <div className="layout">
    <Header />
    <div className="wrapper">
      {children}
    </div>
    <Footer />
  </div>
);

export default connect()(Layout);
