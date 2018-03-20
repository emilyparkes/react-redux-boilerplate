import React from 'react'

import App from './components/App'
let store = createStore(reducers, compose(
  applyMiddleware(thunkMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
  )
})
