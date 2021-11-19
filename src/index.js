import React from 'react';
import { render } from 'react-dom';
import configureStore, { history } from './store/configureStore';
import Root from './components/Root';
import * as serviceWorker from './serviceWorker';
import { MoralisProvider } from "react-moralis";
// import Moralis from 'Moralis'

// const Moralis = newConfigMoralis();




const store = configureStore();

const moralisAppId = "ehzCQbqTnft2zNN7GoY9PmBNNaSHOsjOJb8bVx2V";
const moralisServerURL = "https://geg6yousp7hb.usemoralis.com:2053/server";


render(
  <MoralisProvider appId={moralisAppId} serverUrl={moralisServerURL}>
    <Root store={store} history={history} />
  </MoralisProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
