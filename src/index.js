import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers/index'

function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  )
}

let store = configureStore()
// store.subscribe(() => console.log('store ==>', store.getState()))

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider> ,
  document.getElementById('root')
);
registerServiceWorker();
