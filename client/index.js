import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Auth0Provider } from '@auth0/auth0-react'
import store from './store'
import App from './components/App'

const rootElement = document.getElementById('app')
const root = createRoot(rootElement)

// const domain = process.env.REACT_APP_AUTH0_DOMAIN
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="sherelynn.au.auth0.com"
      clientId="JhJ7Xu3EHvhggI7s9LqodyHMH8YKJy6e"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </Auth0Provider>
  </React.StrictMode>,
)
