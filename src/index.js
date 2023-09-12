import React, { StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import reportWebVitals from './reportWebVitals';

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

const chains = [polygonMumbai, polygon]
const projectId = 'cb3181e63c53b999fc097379f564d554';

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)

const router = createBrowserRouter([

  ...IndexRouters,
  ...SimpleRouter,
  ...ChatRouter
], { basename: process.env.PUBLIC_URL })
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WagmiConfig config={wagmiConfig}>
        <Provider store={store}>
        <App>
          <RouterProvider router={router}>
          </RouterProvider>
          </App>
        </Provider>
    </WagmiConfig>
    <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
  </StrictMode>
)
