/* eslint-disable*/
import React, { StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//router
import {  createBrowserRouter, RouterProvider } from 'react-router-dom'

//store

import { Provider } from 'react-redux';
//reducer
import {store} from './store'

import { IndexRouters } from './router';
import { SimpleRouter } from './router/simple-router';
import { ChatRouter } from './router/chat-router';

// ====================================================================

import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { polygonMumbai, polygon } from 'wagmi/chains'
import { InjectedConnector } from 'wagmi/connectors/injected';
import { publicProvider } from 'wagmi/providers/public';
import { LensConfig, production } from '@lens-protocol/react-web';
import { bindings as wagmiBindings } from '@lens-protocol/wagmi';
import { LensProvider } from '@lens-protocol/react-web';

const chains = [polygonMumbai, polygon]
const projectId = 'cb3181e63c53b999fc097379f564d554';

// const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const { publicClient, webSocketPublicClient } = configureChains(
  [polygonMumbai, polygon],
  [publicProvider()],
);

const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
  connectors: [
    new InjectedConnector({
      options: {
        shimDisconnect: false,
      },
    }),
  ],
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
});

const lensConfig = {
  bindings: wagmiBindings(),
  environment: production,
};


const ethereumClient = new EthereumClient(wagmiConfig, chains)

const router = createBrowserRouter([

  ...IndexRouters,
  ...SimpleRouter,
  ...ChatRouter
], { basename: process.env.PUBLIC_URL })
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WagmiConfig config={wagmiConfig}>
      <LensProvider config={lensConfig}>
        <Provider store={store}>
        <App>
          <RouterProvider router={router}>
          </RouterProvider>
          </App>
        </Provider>
      </LensProvider>
    </WagmiConfig>
    <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
  </StrictMode>
);

/* eslint-disable*/
