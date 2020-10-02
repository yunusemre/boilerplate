import React from 'react';
import { connect } from 'react-redux';

const Layout = ({ children }) => <>{children}</>;

export default connect()(Layout);
