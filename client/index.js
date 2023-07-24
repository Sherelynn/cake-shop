import React from 'react'
import { createRoot } from 'react-dom/client' // Import createRoot from 'react-dom/client' instead of 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './components/App'

const rootElement = document.getElementById('app')
const root = createRoot(rootElement)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
)
