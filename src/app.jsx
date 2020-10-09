import 'antd/dist/antd.css';
import 'assets/scss/app.scss';
import React from 'react';
import {
  Route, Switch, Redirect, BrowserRouter,
} from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import Layout from 'components/layouts';
import PageHome from 'container/home';

const App = () => (
  <>
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={PageHome} />
          <Redirect from="*" to="/" />
        </Switch>
      </Layout>
    </BrowserRouter>
  </>
);

export default hot(App);
