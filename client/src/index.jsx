import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import appHeight from './javascript/documentHeight';

// Components
import { Header } from './components';
import Footer from './container';
import { Home, NotFound, Tasks } from './pages';

// Assets
import './assets/styles/index.scss';

// Services
import * as serviceWorker from './serviceWorker';
import storeConfig from './store';

const store = storeConfig();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tasks" exact component={Tasks} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
appHeight();
