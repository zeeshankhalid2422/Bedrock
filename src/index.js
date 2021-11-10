import React from 'react';
import { render } from 'react-dom';
import configureStore, { history } from './store/configureStore';
import Root from './components/Root';
import * as serviceWorker from './serviceWorker';
// import Moralis from 'Moralis'

// const Moralis = newConfigMoralis();




const store = configureStore();


render(
  <Root store={store} history={history} />,
  document.getElementById('root')
);

serviceWorker.unregister();
