import React from 'react';
import { render } from 'react-dom';
import configureStore, { history } from './store/configureStore';
import Root from './components/Root';
import * as serviceWorker from './serviceWorker';
import { MoralisProvider } from "react-moralis";
// import Moralis from 'Moralis'

// const Moralis = newConfigMoralis();




const store = configureStore();

const moralisAppId = "xqAjwMlMpNQkbRCbb99mUORaFK2b4xAjKsSEGJp3";
const moralisServerURL = "https://arqj3qic8iv7.usemoralis.com:2053/server";


render(
  <MoralisProvider appId={moralisAppId} serverUrl={moralisServerURL}>
    <Root store={store} history={history} />
  </MoralisProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
