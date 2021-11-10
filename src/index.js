import React from 'react';
import { render } from 'react-dom';
import configureStore, { history } from './store/configureStore';
import Root from './components/Root';
import * as serviceWorker from './serviceWorker';
import { MoralisProvider } from "react-moralis";
// import Moralis from 'Moralis'

// const Moralis = newConfigMoralis();




const store = configureStore();

const moralisAppId = "6HuiXeZy85T0YZucccFMkhwu2uSJYPURN7yIqEng";
const moralisServerURL = "https://ncvjhgyi2u9m.usemoralis.com:2053/server";


render(
  <MoralisProvider appId={moralisAppId} serverUrl={moralisServerURL}>
    <Root store={store} history={history} />
  </MoralisProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
